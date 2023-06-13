import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { GameAction } from '@types'

interface Payload {
  actionType: GameAction
  playerId: string
}

export const usePostAction = () => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const makeAction = async (data: Payload): Promise<void> => {
    const response = await axios.post(`/games/action/${data.actionType}`, { playerId: data.playerId })

    if (!response) {
      throw new Error()
    }

    return response.data
  }

  return useMutation(makeAction, {
    onSuccess: () => {
      queryClient.invalidateQueries('game')
    },
    onError: () => {},
  })
}
