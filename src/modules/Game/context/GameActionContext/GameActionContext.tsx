import React, { createContext, Dispatch, useContext, useReducer } from 'react'

import { GameAction, Player } from '@types'

import { reducer } from './reducer'

/**
 * Before an action, user can select one of his entities and choose a game action to perform.
 * This context provides data for the game action state.
 */

export interface GameActionState {
  selectedPlayer: Player | null
  madeActions: {
    [playerId: string]: {
      entityPlayer: Player
      gameAction: GameAction
      gameActionPayload: any
    }
  }
}

export type GameActionStateDispatch = Dispatch<{ type: string; payload: any }>

interface GameActionContextData {
  state: GameActionState
  dispatch: GameActionStateDispatch
}

const initialState: GameActionState = {
  selectedPlayer: null,
  madeActions: {},
}

const GameActionContext = createContext<GameActionContextData>({ state: initialState, dispatch: () => {} })

export const GameActionContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <GameActionContext.Provider value={{ state, dispatch }}>{children}</GameActionContext.Provider>
}

export const useGameActionContext = (): GameActionContextData => {
  const context = useContext(GameActionContext)

  if (!context) throw new Error('useGameActionContext hook must be used within a GameActionContextProvider')

  return context
}
