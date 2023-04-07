import { NextPage } from 'next'
import { useAxios, useUserContext } from '@hooks'
import { User } from '@types'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { Loader } from './Loader'

const useProfile = () => {
  const axios = useAxios()
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useUserContext()

  const getProfile = async (): Promise<User> => {
    const response = await axios.get('/auth/me')

    if (!response || !response.data) {
      throw new Error()
    }

    return response.data as User
  }

  return useQuery('profile', getProfile, {
    onSuccess: (data) => {
      setIsLoggedIn(true)
      setUser(data)
    },
    onError: () => {
      setIsLoggedIn(false)
    },
    staleTime: Infinity,
    retry: false,
    enabled: !user && isLoggedIn,
  })
}

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const { isLoggedIn, user } = useUserContext()
    const { isLoading, isError } = useProfile()
    const router = useRouter()

    console.log(
      '%clog | withAuth\n',
      'color: #0e8dbf; margin-bottom: 5px;',
      user
    )

    if (isLoading) {
      return <Loader />
    }

    if (isError) {
      router.push('/')
      return null
    }

    return isLoggedIn ? <Component /> : null
  }

  return AuthenticatedComponent
}
