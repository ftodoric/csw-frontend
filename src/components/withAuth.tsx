import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useMyProfile, useUserContext } from '@hooks'

import { Loader } from './Loader'

export const withAuth = (Component: NextPage) => {
  const AuthenticatedComponent = () => {
    const { isLoading, isError } = useMyProfile()
    const { isLoggedIn, user } = useUserContext()
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
