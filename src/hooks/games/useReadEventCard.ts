import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { TeamSide } from '@types'

export const useReadEventCard = (gameId: string, teamSide: TeamSide) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const readEventCard = async (): Promise<void> => {
    const response = await axios.post(`/games/${gameId}/readEventCard/${teamSide}`)

    if (!response) {
      throw new Error()
    }

    return response.data
  }

  return useMutation(readEventCard, {
    onSuccess: () => {
      queryClient.invalidateQueries('game')
    },
    onError: () => {},
  })
}
