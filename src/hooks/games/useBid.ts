import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { Player, TeamSide } from '@types'

interface BidPayload {
  bid: number
  teamSide: TeamSide
  entityPlayer: Player
}

export const useBid = (assetId: string) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const makeBid = async (payload: BidPayload): Promise<void> => {
    const response = await axios.post(`/games/bid/${assetId}`, payload)

    if (!response) {
      throw new Error()
    }

    return response.data
  }

  return useMutation(makeBid, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('blackMarketAssets')
    },
    onError: () => {},
  })
}
