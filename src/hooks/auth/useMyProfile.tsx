import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { User } from '@types'

import { useUserContext } from './useUserContext'

export const useMyProfile = () => {
  const axios = useAxios()
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUserContext()

  const getProfile = async (): Promise<User> => {
    const response = await axios.get('/auth/me')

    if (!response || !response.data) {
      throw new Error()
    }

    return response.data as User
  }

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setIsLoggedIn(true)
      setUser(data)
    },
    onError: () => {
      setIsLoggedIn(false)
    },
    staleTime: Infinity,
    retry: false,
    enabled: !user && isLoggedIn,
  })
}
