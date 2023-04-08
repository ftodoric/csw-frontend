import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AxiosProvider, UserContextProvider } from '@context'

import '../../styles/reset.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Simulate cyber warfare between two opposing sides each consisting of their own government and 4 more appropriate national entites."
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
