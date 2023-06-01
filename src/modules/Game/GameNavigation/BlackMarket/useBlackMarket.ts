import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Asset } from '@types'

export const useBlackMarket = (gameId: string) => {
  const axios = useAxios()

  const getBlackMarketAssets = async (gameId: string): Promise<Asset[]> => {
    const response = await axios.get(`/games/${gameId}/blackMarket`)

    return response.data
  }

  return useQuery('blackMarketAssets', () => getBlackMarketAssets(gameId), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
