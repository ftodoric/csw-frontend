import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconHome, IconPause, IconPlay } from '@components/Icons'
import { useConnectSocket, useGame, useUserContext } from '@hooks'
import { GameStatus, TeamSide } from '@types'

import { Battleground, TeamBackground } from './Battleground'
import { GameNavigation } from './GameNavigation'
import * as S from './styles'
import { determineUserSide, formatTimer, gamePeriodMap, getWinnerText } from './utils'

export const GameContainer = ({ gameId }: { gameId: string }) => {
  const queryClient = useQueryClient()

  const { user } = useUserContext()
  const { data: game } = useGame(gameId)

  // Initialize game session socket
  const { socket, time } = useConnectSocket(gameId, game?.turnsRemainingTime)

  const [isOwner, setIsOwner] = useState(false)
  const [userSide, setUserSide] = useState(TeamSide.Blue)
  const [isWinnerBannerActive, setIsWinnerBannerActive] = useState(true)

  // Set owner and determine user side
  useEffect(() => {
    if (!user || !game) return

    setIsOwner(game.ownerId === user.id)

    const usersSide = determineUserSide(user, game)
    setUserSide(usersSide)
  }, [game, user])

  // Refetch game data after the timer timeout (end of a turn)
  useEffect(() => {
    if (time === 0) queryClient.invalidateQueries('game')
  }, [time, queryClient])

  const handleToggleTimer = (gameStatus: GameStatus) => {
    if (socket) {
      const paused = gameStatus === GameStatus.NotStarted || gameStatus === GameStatus.Paused
      socket.emit(paused ? 'startTimer' : 'pauseTimer')
      queryClient.invalidateQueries('game')
    }
  }

  if (!user || !game) return null

  const isGameOver = game.status === GameStatus.Finished

  const hasGameOutcome = game.outcome !== null && game.outcome !== undefined

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

          {isOwner && (
            <S.UserNavHoverWrapper onClick={() => handleToggleTimer(game.status)}>
              {!isGameOver &&
                (game.status === GameStatus.InProgress ? (
                  <IconPause width="32px" fill="white" />
                ) : (
                  <IconPlay width="32px" fill="white" />
                ))}
            </S.UserNavHoverWrapper>
          )}
        </S.UserNav>

        <S.Counter>{isGameOver && hasGameOutcome ? getWinnerText(game.outcome!) : formatTimer(time)}</S.Counter>

        <S.GamePeriod>{gamePeriodMap[game.activePeriod]}, 2020</S.GamePeriod>
      </S.Header>

      <S.Battleground>
        <TeamBackground side={userSide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue} />
        <TeamBackground side={userSide} userSide />

        <Battleground game={game} userSide={userSide} />
      </S.Battleground>

      <GameNavigation game={game} />

      {/* Winner Banner */}
      {hasGameOutcome && isWinnerBannerActive && (
        <S.WinnerBanner outcome={game.outcome!}>
          <div>{getWinnerText(game.outcome!, true)}</div>

          <span>
            <Link href="/lobby">Back to Lobby</Link>
          </span>

          <span onClick={() => setIsWinnerBannerActive(false)}>See the game</span>
        </S.WinnerBanner>
      )}
    </>
  )
}
