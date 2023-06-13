import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { GameAction, Player } from '@types'

interface ActionData {
  [playerId: string]: {
    entityPlayer: Player
    gameAction: GameAction
    gameActionPayload: any
  }
}

export const useFinishTurn = (gameId: string) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const makeAction = async (data: ActionData): Promise<void> => {
    const response = await axios.post(`/games/${gameId}/finishTurn`, data)

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
