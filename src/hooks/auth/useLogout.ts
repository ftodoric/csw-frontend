import { useMutation } from "react-query";

import { useUserContext, useAxios } from "@hooks";

export const useLogout = () => {
  const axios = useAxios();
  const { setUser, setIsLoggedIn } = useUserContext();

  const logout = async () => {
    const data = await axios.post("/auth/logout");

    return data;
  };

  return useMutation(logout, {
    onSuccess: async () => {
      setIsLoggedIn(false);

      setUser(null);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
