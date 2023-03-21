import { useRouter } from "next/router";

import { useUserContext } from "./useUserContext";

export const useHomeRedirect = () => {
  const router = useRouter();
  const { user } = useUserContext();

  const redirect = () => {
    switch (user?.role) {
      case "student":
        router.push("/student/home", "/student/home", {
          locale: router.locale,
        });
        break;
      case "tutor":
      case "admin":
        router.push("/tutor/home", "/tutor/home", { locale: router.locale });
        break;
      default:
        router.push("/login");
    }
  };

  return redirect;
};
