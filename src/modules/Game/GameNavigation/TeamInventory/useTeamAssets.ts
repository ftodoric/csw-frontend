import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Asset, TeamSide } from '@types'

export const useTeamAssets = (gameId: string, side: TeamSide) => {
  const axios = useAxios()

  const getTeamAssets = async (gameId: string, side: TeamSide): Promise<Asset[]> => {
    const response = await axios.get(`/games/${gameId}/assets/${side}`)

    return response.data
  }

  return useQuery('teamAssets', () => getTeamAssets(gameId, side), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
