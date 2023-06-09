import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useMyProfile, useUserContext } from '@hooks'

import { Loader } from './Loader'

export const withAuth = (Component: NextPage<any>) => {
  const AuthenticatedComponent = (props: any) => {
    const { isLoading, isError } = useMyProfile()
    const { user } = useUserContext()
    const router = useRouter()

    if (isLoading) {
      return <Loader />
    }

    if (isError || !user) {
      router.push('/')
      return null
    }

    return <Component {...props} />
  }

  return AuthenticatedComponent
}
