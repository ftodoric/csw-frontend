import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Game } from '@types'

export const useGame = (id: string | undefined) => {
  const axios = useAxios()

  const getGame = async (id: string | undefined): Promise<Game> => {
    let response
    if (id) response = await axios.get(`/games/${id}`)

    return response?.data
  }

  return useQuery('game', () => getGame(id), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
