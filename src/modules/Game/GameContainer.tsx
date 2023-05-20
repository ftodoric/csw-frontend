import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconHome, IconPause, IconPlay } from '@components/Icons'
import { useConnectSocket, useGame, useUserContext } from '@hooks'
import { GameStatus, TeamSide } from '@types'

import { Battleground, TeamBackground } from './Battleground'
import { GameNavigation } from './GameNavigation'
import { SelectedEntityProvider } from './PlayerContext'
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
  const [hasOutcome, setHasOutcome] = useState(false)

  useEffect(() => {
    if (!user || !game) return

    // Determine owner
    setIsOwner(game.ownerId === user.id)

    // Determine user side
    const usersSide = determineUserSide(user, game)
    setUserSide(usersSide)

    // Check for outcome
    if (game.outcome !== undefined && game.outcome !== null) {
      setHasOutcome(true)
    }
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

  return (
    <SelectedEntityProvider>
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

        <S.Counter>{isGameOver && hasOutcome ? '' : formatTimer(time)}</S.Counter>

        <S.GamePeriod>{gamePeriodMap[game.activePeriod]}, 2020</S.GamePeriod>
      </S.Header>

      <S.Battleground>
        <TeamBackground
          side={userSide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue}
          isActive={userSide === TeamSide.Blue ? game.activeSide === TeamSide.Red : game.activeSide === TeamSide.Blue}
        />
        <TeamBackground
          side={userSide}
          userSide
          isActive={userSide === TeamSide.Blue ? game.activeSide === TeamSide.Blue : game.activeSide === TeamSide.Red}
        />

        <Battleground game={game} userSide={userSide} />
      </S.Battleground>

      <GameNavigation game={game} userSide={userSide} />

      {/* Winner Banner */}
      {hasOutcome && isWinnerBannerActive && (
        <S.WinnerBanner outcome={game.outcome!}>
          <div>{getWinnerText(game.outcome!, true)}</div>

          <span>
            <Link href="/lobby">Back to Lobby</Link>
          </span>

          <span onClick={() => setIsWinnerBannerActive(false)}>See the game</span>
        </S.WinnerBanner>
      )}
    </SelectedEntityProvider>
  )
}
