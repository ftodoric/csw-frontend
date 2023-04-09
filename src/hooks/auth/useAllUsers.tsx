import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { User } from '@types'

export const useAllUsers = () => {
  const axios = useAxios()

  const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get('/auth/users')

    if (!response || !response.data) {
      throw new Error('Unauthorized')
    }

    return response.data as User[]
  }

  return useQuery('allUsers', getAllUsers, {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
