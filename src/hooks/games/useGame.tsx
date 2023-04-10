import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Game } from '@types'

export const useGame = () => {
  const axios = useAxios()
  const router = useRouter()

  const getGame = async (): Promise<Game> => {
    const { id } = router.query

    const response = await axios.get(`/games/${id}`)

    return response.data
  }

  return useQuery('game', () => getGame(), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
