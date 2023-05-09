import getConfig from 'next/config'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { Socket, io } from 'socket.io-client'

export const useConnectSocket = (gameId: string, turnsRemainingTime?: number) => {
  const queryClient = useQueryClient()
  const [socket, setSocket] = useState<Socket>()
  const [time, setTime] = useState<number>(turnsRemainingTime ? turnsRemainingTime : 0)

  useEffect(() => {
    const socket = io(getConfig().publicRuntimeConfig.wsUrl, {
      // Prevent long polling
      transports: ['websocket'],
      query: {
        gameId,
      },
    })

    socket.on('connect', () => {
      console.log('%clog | connected to game session', 'color: #0e8dbf; margin-bottom: 5px;')
    })

    socket.on('tick', (data) => {
      if (data.time === 30) {
        queryClient.invalidateQueries('game')
      }

      setTime(data.time)
    })

    setSocket(socket)

    return () => {
      console.log('%clog | disconnected from game session', 'color: #0e8dbf; margin-bottom: 5px;')
      socket.disconnect()
    }
  }, [queryClient, gameId])

  return { socket, time }
}
