import { useRouter } from "next/router";
import { useMutation } from "react-query";

import { useAxios } from "@hooks";
import { RegisterFormInputs } from "@types";

export const useSignUp = () => {
  const router = useRouter();
  const axios = useAxios();

  const signUp = async (input: RegisterFormInputs): Promise<void> => {
    const response = await axios.post("/auth/signup", input);

    if (!response) {
      throw new Error();
    }

    return response.data;
  };

  return useMutation(signUp, {
    onSuccess: () => {
      router.push("/");
    },
    onError: () => {},
  });
};
