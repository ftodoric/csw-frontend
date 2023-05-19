import React, { createContext, Dispatch, useContext, useReducer } from 'react'

import { Player } from '@types'

/**
 * This context provides currently selected entity. One user can manage multiple entites (be multiple players) in a single game.
 */

const EntityContext = createContext<Player | null>(null)
const EntityDispatchContext = createContext<Dispatch<any> | null>(null)

// Action list
export const SET_ENTITY = 'SET_ENTITY'
export const RESET_ENTITY = 'RESET_ENTITY'

export const reducer = (state: Player | null, action: any): Player | null => {
  switch (action.type) {
    case SET_ENTITY:
      return { ...state, ...action.payload }
    case RESET_ENTITY:
    default:
      return null
  }
}

export const SelectedEntityProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, null)

  return (
    <EntityContext.Provider value={state}>
      <EntityDispatchContext.Provider value={dispatch}>{children}</EntityDispatchContext.Provider>
    </EntityContext.Provider>
  )
}

export const useEntityState = (): Player | null => {
  const context = useContext(EntityContext)

  return context
}

export const useEntityDispatch = () => {
  const context = useContext(EntityDispatchContext)
  if (!context) {
    throw new Error('useCreateMatchDispatch must be used within a CreateMatchProvider')
  }

  return context
}
