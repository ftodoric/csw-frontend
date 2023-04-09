import { useMutation, useQuery } from 'react-query'

import { useAxios } from '@hooks'
import { NewGameFormType } from '@types'

export const useCreateGame = () => {
  const axios = useAxios()

  const createGame = async (input: NewGameFormType): Promise<string> => {
    const response = await axios.post('/games', input)
    const data = response.data
    return data
  }

  return useMutation(createGame, {
    onSuccess: async () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
