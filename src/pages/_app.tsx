import { AxiosProvider, UserContextProvider } from "@context";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "../../styles/reset.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AxiosProvider>
          <Component {...pageProps} />
        </AxiosProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
