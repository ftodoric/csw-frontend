import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React, { createContext, useMemo } from 'react'

import Axios, { AxiosInstance } from 'axios'

import { useLogout, useUserContext } from '@hooks'

export const AxiosContext = createContext<AxiosInstance>(
  Axios.create({
    baseURL: getConfig().publicRuntimeConfig.apiUrl,
    withCredentials: true,
  })
)

export const AxiosProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const router = useRouter()
  const logout = useLogout()
  const { user } = useUserContext()
  const { publicRuntimeConfig } = getConfig()

  const auth = useMemo(() => {
    const axios = Axios.create({
      baseURL: publicRuntimeConfig.apiUrl,
      withCredentials: true,
    })

    axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error.response.status === 401 && router.pathname !== '/' && user) {
          logout.mutate()
        }
      }
    )

    return axios
  }, [logout, user, publicRuntimeConfig.apiUrl, router.pathname])

  return React.createElement(AxiosContext.Provider, { value: auth }, children)
}
