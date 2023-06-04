import { useMutation, useQueryClient } from 'react-query'

import { useAxios } from '@hooks'
import { TeamSide } from '@types'

interface AssetActivationPayload {
  teamSide: TeamSide
  payload?: any
}

export const useActivateAsset = (gameId: string, assetId: string) => {
  const axios = useAxios()
  const queryClient = useQueryClient()

  const sendAssetActivatinoRequest = async (payload: AssetActivationPayload): Promise<void> => {
    const response = await axios.post(`/games/${gameId}/activateAsset/${assetId}`, payload)

    if (!response) {
      throw new Error()
    }

    return response.data
  }

  return useMutation(sendAssetActivatinoRequest, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('game')
      queryClient.invalidateQueries('teamAssets')
    },
    onError: () => {},
  })
}
