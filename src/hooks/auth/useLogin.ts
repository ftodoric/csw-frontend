import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useAxios } from "@hooks";
import { useUserContext } from "./useUserContext";
import { LoginFormInputs, LoginResponse } from "@types";

export const useLogin = () => {
  const axios = useAxios();
  const router = useRouter();
  const { setIsLoggedIn } = useUserContext();

  const login = async (input: LoginFormInputs): Promise<LoginResponse> => {
    const response = await axios.post("/auth/login", input);

    const data = response.data as LoginResponse;
    return data;
  };

  return useMutation(login, {
    onSuccess: () => {
      setIsLoggedIn(true);

      let returnUrl = "/lobby";
      if (router.query.returnUrl) {
        returnUrl = router.query.returnUrl as string;
      }

      router.push(returnUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
