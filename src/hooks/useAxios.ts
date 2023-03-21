import { useContext } from "react";

import { AxiosContext } from "@context";

export const useAxios = () => useContext(AxiosContext);
