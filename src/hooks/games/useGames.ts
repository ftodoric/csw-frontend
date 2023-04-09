import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import { useAxios } from '@hooks/useAxios'
import { Game } from '@types'

export const useGames = () => {
  const axios = useAxios()
  const router = useRouter()

  const getAllGames = async (): Promise<Game[]> => {
    const response = await axios.get(`/games`)

    return response.data
  }

  return useQuery('allGames', () => getAllGames(), {
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })
}
