import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

/**
 * This state contains the message log.
 * This is used together with socket to receive only the latest change log. If the user refreshes the page, this state
 * will be repopulated from the game state field.
 */

interface MessageLogContextType {
  log: string | null
  setLog: Dispatch<SetStateAction<string | null>>
}

const initialState: MessageLogContextType = {
  log: null,
  setLog: () => {},
}

const MessageLogContext = createContext<MessageLogContextType>(initialState)

export const MessageLogContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [log, setLog] = useState<string | null>(null)

  return <MessageLogContext.Provider value={{ log, setLog }}>{children}</MessageLogContext.Provider>
}

export const useMessageLogContext = (): MessageLogContextType => {
  const context = useContext(MessageLogContext)

  if (!context) throw new Error('useMessageLogContext hook must be used within a MessageLogContextProvider')

  return context
}
