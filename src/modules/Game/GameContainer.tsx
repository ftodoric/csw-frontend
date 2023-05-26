import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconHome, IconPause, IconPlay } from '@components/Icons'
import { useConnectSocket, useGame, useUserContext } from '@hooks'
import { GameStatus, TeamSide } from '@types'

import { Battleground, TeamBackground } from './Battleground'
import { removePlayer, useGameActionContext } from './context/GameActionContext'
import { useGameContext } from './context/GameContext'
import { GameNavigation } from './GameNavigation'
import * as S from './styles'
import { determineUserSide, formatTimer, gamePeriodMap, getWinnerText } from './utils'

export const GameContainer = ({ gameId }: { gameId: string }) => {
  const queryClient = useQueryClient()

  // withAuth component performs user check
  const { user } = useUserContext()
  const { id: userId, username } = user!

  const { data: game } = useGame(gameId)

  const { game: gameState, setGame } = useGameContext()
  const { dispatch } = useGameActionContext()

  // Initialize game session socket
  const { socket, time } = useConnectSocket(gameId, game?.turnsRemainingTime)

  const [isOwner, setIsOwner] = useState(false)
  const [isTimerActionLoading, setTimerActionLoading] = useState(false)
  const [isPauseButtonVisible, setPauseButtonVisible] = useState(game?.status === GameStatus.InProgress)
  const [usersSide, setUsersSide] = useState(TeamSide.Blue)
  const [isWinnerBannerActive, setIsWinnerBannerActive] = useState(true)

  useEffect(() => {
    if (!game) return

    // Set the game state in the global context
    setGame(game)

    // Refresh the game action state
    dispatch(removePlayer())

    // Determine is the user owner
    setIsOwner(game.ownerId === userId)

    // Determine user's side
    const usersSide = determineUserSide(userId, game)
    setUsersSide(usersSide)
  }, [game, userId, setGame, dispatch])

  // Refetch game data after timer timeout (end of a turn)
  useEffect(() => {
    if (time === 0) queryClient.invalidateQueries('game')
  }, [time, queryClient])

  /**
   * Timer action needs to be waited for completion,
   * otherwise user can fast double click on it and start the timer twice.
   */
  const initTimerAction = () => {
    setTimerActionLoading(true)
  }

  useEffect(() => {
    if (isTimerActionLoading) {
      setPauseButtonVisible(!isPauseButtonVisible)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerActionLoading])

  useEffect(() => {
    if (game && socket && isTimerActionLoading) {
      const ack = socket.emitWithAck(isPauseButtonVisible ? 'startTimer' : 'pauseTimer')
      ack.then(() => queryClient.invalidateQueries('game'))
      setTimerActionLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game, socket, queryClient, isPauseButtonVisible])

  // Data guard
  if (!game || !gameState) return null

  const showTimerControl = isOwner && game.status !== GameStatus.Finished

  return (
    <>
      <S.Header>
        <S.UserNav>
          <S.Username>{username}</S.Username>

          <Link href="/lobby">
            <S.UserNavHoverWrapper>
              <IconHome width="26px" fill="#fff" />
            </S.UserNavHoverWrapper>
          </Link>

          {showTimerControl && (
            <S.UserNavHoverWrapper onClick={initTimerAction}>
              {isPauseButtonVisible ? <IconPause width="32px" fill="white" /> : <IconPlay width="32px" fill="white" />}
            </S.UserNavHoverWrapper>
          )}
        </S.UserNav>

        {game.status !== GameStatus.Finished && (
          <>
            <S.Counter>{formatTimer(time)}</S.Counter>
            <S.GamePeriod>{gamePeriodMap[game.activePeriod]}, 2020</S.GamePeriod>
          </>
        )}
      </S.Header>

      <S.Battleground>
        <TeamBackground
          side={usersSide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue}
          isActive={usersSide === TeamSide.Blue ? game.activeSide === TeamSide.Red : game.activeSide === TeamSide.Blue}
        />
        <TeamBackground
          side={usersSide}
          userSide
          isActive={usersSide === TeamSide.Blue ? game.activeSide === TeamSide.Blue : game.activeSide === TeamSide.Red}
        />

        <Battleground game={game} userSide={usersSide} />
      </S.Battleground>

      <GameNavigation userSide={usersSide} isOwner={isOwner} />

      {/* Winner Banner */}
      {game.status === GameStatus.Finished && isWinnerBannerActive && (
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
