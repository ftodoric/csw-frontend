import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { useAxios } from '@hooks'
import { NewGameFormType } from '@types'

export const useCreateGame = () => {
  const axios = useAxios()
  const router = useRouter()

  const createGame = async (input: NewGameFormType): Promise<string> => {
    const response = await axios.post('/games', input)
    const data = response.data
    return data
  }

  return useMutation(createGame, {
    onSuccess: async () => {
      router.push('/lobby')
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
