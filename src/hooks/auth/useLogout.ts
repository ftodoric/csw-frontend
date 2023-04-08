import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { useUserContext, useAxios } from '@hooks'

export const useLogout = () => {
  const axios = useAxios()
  const { setUser } = useUserContext()
  const router = useRouter()

  const logout = async () => {
    const data = await axios.post('/auth/logout')

    return data
  }

  return useMutation(logout, {
    onSuccess: async () => {
      await router.push('/')
      setUser(null)
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
