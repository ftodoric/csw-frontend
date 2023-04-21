import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { io } from 'socket.io-client'

import { IconHome, IconPause, IconPlay } from '@components/Icons'
import { useGame, useUserContext } from '@hooks'
import { TeamSide } from '@types'

import { Battleground, TeamBackground } from './Battleground'
import { Navigation } from './Navigation'
import * as S from './styles'
import { determineUserSide, formatTimer } from './utils'

export const GameContainer = ({ gameId }: { gameId: string }) => {
  const { user } = useUserContext()
  const { data: game } = useGame(gameId)

  const [isOwner, setIsOwner] = useState(false)
  const [userSide, setUserSide] = useState(TeamSide.Blue)

  const [socket, setSocket] = useState<any>(null)
  const [time, setTime] = useState<number>(game ? game.turnsRemainingTime : 0)

  const queryClient = useQueryClient()

  useEffect(() => {
    const socket = io('localhost:8000', {
      // Prevent long polling
      transports: ['websocket'],
      query: {
        gameId,
      },
    })

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('tick', (data) => {
      console.log(data)
      setTime(data.time)
    })

    setSocket(socket)

    return () => {
      socket.disconnect()
    }
  }, [gameId])

  useEffect(() => {
    if (!user || !game) return

    setIsOwner(game.ownerId === user.id)

    const usersSide = determineUserSide(user, game)
    setUserSide(usersSide)
  }, [game, user])

  useEffect(() => {
    if (time === 0) queryClient.invalidateQueries('game')
  }, [queryClient, time])

  const handleToggleTimer = (gamePaused: boolean) => {
    if (socket) {
      socket.emit(gamePaused ? 'startTimer' : 'pauseTimer')
      queryClient.invalidateQueries('game')
    }
  }

  if (!user || !game) return null

  return (
    <>
      <S.Header>
        <S.UserNav>
          <S.Username>{user.username}</S.Username>

          <Link href="/lobby">
            <S.UserNavHoverWrapper>
              <IconHome width="26px" fill="#fff" />
            </S.UserNavHoverWrapper>
          </Link>

          <div style={{ marginLeft: 10 }}>
            {isOwner && (
              <S.UserNavHoverWrapper
                style={{ padding: '2px 2px 0' }}
                onClick={() => handleToggleTimer(game.paused)}
              >
                {game.paused ? (
                  <IconPlay width="32px" fill="white" />
                ) : (
                  <IconPause width="32px" fill="white" />
                )}
              </S.UserNavHoverWrapper>
            )}
          </div>
        </S.UserNav>

        <S.Counter>{formatTimer(time)}</S.Counter>

        <S.GamePeriod>January, 2020</S.GamePeriod>
      </S.Header>

      <S.Battleground>
        <TeamBackground
          side={userSide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue}
        />
        <TeamBackground side={userSide} userSide />

        <Battleground game={game} userSide={userSide} />
      </S.Battleground>

      <Navigation />
    </>
  )
}
