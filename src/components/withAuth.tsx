import { NextPage } from "next";

import { useUserContext } from "@hooks";

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const { isLoggedIn } = useUserContext();

    return isLoggedIn ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
