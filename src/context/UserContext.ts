import React, { useMemo, useState, createContext } from 'react'

import { OptionalUser } from '@types'

interface UserContextType {
  user: OptionalUser
  setUser: React.Dispatch<React.SetStateAction<OptionalUser>>
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
  isLoggedIn: false,
  setIsLoggedIn: () => true,
})

export const UserContextProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<OptionalUser>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const providerUser = useMemo(
    () => ({
      user,
      setUser,
      isLoggedIn,
      setIsLoggedIn,
    }),
    [user, setUser, isLoggedIn, setIsLoggedIn]
  )

  return React.createElement(
    UserContext.Provider,
    { value: providerUser },
    children
  )
}
