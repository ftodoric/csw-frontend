import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { User } from '@types'

import { useUserContext } from './useUserContext'

export const useMyProfile = () => {
  const axios = useAxios()
  const { setUser } = useUserContext()
  const router = useRouter()

  const getMyProfile = async (): Promise<User> => {
    const response = await axios.get('/auth/me')

    if (!response || !response.data) {
      throw new Error('Unauthorized')
    }

    return response.data as User
  }

  return useQuery('profile', getMyProfile, {
    onSuccess: (data) => {
      setUser(data)
    },
    staleTime: Infinity,
    retry: false,
  })
}
