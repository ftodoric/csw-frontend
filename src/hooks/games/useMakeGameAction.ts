import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { GameAction } from '@types'

interface ActionData {
  actionType: GameAction
  payload?: any
}

export const useMakeGameAction = (gameId: string) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const makeAction = async (data: ActionData): Promise<void> => {
    const response = await axios.post(`/games/${gameId}/action/${data.actionType}`, data.payload)

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
