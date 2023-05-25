import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

import { Game } from '@types'

/**
 * This state contains the game. The game is set on the fetch and can be accessed from the children.
 */

interface GameContextType {
  game: Game | null
  setGame: Dispatch<SetStateAction<Game | null>>
}

const initialState: GameContextType = {
  game: null,
  setGame: () => {},
}

const GameContext = createContext<GameContextType>(initialState)

export const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [game, setGame] = useState<Game | null>(null)

  return <GameContext.Provider value={{ game, setGame }}>{children}</GameContext.Provider>
}

export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext)

  if (!context) throw new Error('useGameContext hook must be used within a GameContextProvider')

  return context
}
