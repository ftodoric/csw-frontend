import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Asset } from '@types'

export const usePayRansomwareAttacker = (gameId: string, attackerId: string, victimId: string) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const payRansomwareAttacker = async (answer: string): Promise<Asset[]> => {
    const response = await axios.post(`/games/${gameId}/payRansomwareAttacker/${answer}`, { attackerId, victimId })

    return response.data
  }

  return useMutation(payRansomwareAttacker, {
    onSuccess: () => {
      queryClient.invalidateQueries('game')
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
