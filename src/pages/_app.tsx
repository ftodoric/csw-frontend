import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AxiosProvider, UserContextProvider } from '@context'

import '../../styles/reset.css'
import 'reactflow/dist/style.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Simulate a cyber security warfare situation between two opposing sides each representing a nation of their own with a government and four more appropriate entites."
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <AxiosProvider>
            <Component {...pageProps} />
          </AxiosProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}
