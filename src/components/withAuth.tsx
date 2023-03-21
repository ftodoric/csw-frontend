import { NextPage } from "next";

import { useUserContext } from "@hooks";

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const { user } = useUserContext();

    return user ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
