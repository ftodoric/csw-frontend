import { NextPage } from "next";

import { useAxios, useLogout, useUserContext } from "@hooks";
import { User } from "@types";
import { useQuery } from "react-query";
import { Loader } from "./Loader";
import { useRouter } from "next/router";

const useProfile = () => {
  const axios = useAxios();
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUserContext();

  const getProfile = async (): Promise<User> => {
    const response = await axios.get("/auth/me");

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data as User;
  };

  return useQuery("profile", getProfile, {
    onSuccess: (data) => {
      setIsLoggedIn(true);
      setUser(data);
    },
    onError: () => {
      setIsLoggedIn(false);
    },
    staleTime: Infinity,
    retry: false,
    enabled: !user && isLoggedIn,
  });
};

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const { isLoggedIn, user } = useUserContext();
    const { isLoading, isError } = useProfile();
    const router = useRouter();

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      router.push("/");
      return null;
    }

    return isLoggedIn ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
