import { UserContext } from '@context'
import { useContext } from 'react'

export const useUserContext = () => useContext(UserContext)
