import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useMakeGameAction, useUserContext } from '@hooks'
import { Game, GameAction, GameStatus, PlayerType, TeamSide } from '@types'

import { DistributeDialog } from './DistributeDialog'
import * as S from './styles'
import { removePlayer, useGameActionContext } from '../context/GameActionContext'
import { getWinnerText } from '../utils'

interface NavigationProps {
  game: Game
  userSide: TeamSide
}

export const GameNavigation = ({ game, userSide }: NavigationProps) => {
  const { user } = useUserContext()
  const { id: userId } = user!

  const queryClient = useQueryClient()
  const makeGameAction = useMakeGameAction(game.id)

  const { state, dispatch } = useGameActionContext()
  const { selectedPlayer } = state

  const [isNavigationDisabled, setNavigationDisabled] = useState(true)
  const [areNavigationButtonDisabled, setNavigationButtonsDisabled] = useState(true)

  const [isDistributeDialogOpen, setDistributeDialogOpen] = useState(false)

  useEffect(() => {
    if (selectedPlayer) {
      if (selectedPlayer.user.id === userId) {
        setNavigationDisabled(false)
      }

      if (!selectedPlayer.hasMadeAction) setNavigationButtonsDisabled(false)
      else setNavigationButtonsDisabled(true)
    } else setNavigationDisabled(true)
  }, [userId, game, queryClient, selectedPlayer])

  const handleGameAction = (gameAction: GameAction) => {
    switch (gameAction) {
      case GameAction.DISTRIBUTE:
        setDistributeDialogOpen(true)
        break

      case GameAction.REVITALISE:
        break

      case GameAction.ATTACK:
        break

      case GameAction.ABSTAIN:
        makeGameAction.mutate({ actionType: gameAction, payload: { entityPlayer: selectedPlayer } })
        dispatch(removePlayer())
        queryClient.invalidateQueries('game')

      default:
        break
    }
  }

  const isOnlineTrolls = selectedPlayer?.side === TeamSide.Red && selectedPlayer?.type === PlayerType.People
  const isYourTurn = userSide === TeamSide.Blue ? game.activeSide === TeamSide.Blue : game.activeSide === TeamSide.Red

  return (
    <S.NavigationContainer>
      {/* Message log */}
      <div style={{ width: '150px', height: '100%' }}></div>

      <S.NavigationActions style={{ display: isNavigationDisabled ? 'none' : 'flex' }}>
        {!isOnlineTrolls && (
          <S.ActionButtonWrapper
            bgColor="rgb(240, 234, 175)"
            title="Distribute"
            onClick={() => handleGameAction(GameAction.DISTRIBUTE)}
            disabled={areNavigationButtonDisabled}
          >
            <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
          </S.ActionButtonWrapper>
        )}
        {isDistributeDialogOpen && <DistributeDialog onClose={() => setDistributeDialogOpen(false)} />}

        <S.ActionButtonWrapper bgColor="rgb(178, 204, 215)" title="Revitalise" disabled={areNavigationButtonDisabled}>
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgba(190, 64, 55, 0.4)" title="Attack" disabled={areNavigationButtonDisabled}>
          <IconAttack height="100%" fill="rgb(143, 75, 70)" />
        </S.ActionButtonWrapper>

        {selectedPlayer?.type === PlayerType.Intelligence && (
          <S.ActionButtonWrapper bgColor="rgb(68, 68, 68)" title="Black Market" disabled={areNavigationButtonDisabled}>
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}

        <S.ActionButtonWrapper
          bgColor="rgb(237, 204, 157)"
          title="Abstain"
          disabled={areNavigationButtonDisabled}
          onClick={() => handleGameAction(GameAction.ABSTAIN)}
        >
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>
      </S.NavigationActions>

      <S.NavigationActions style={{ display: isNavigationDisabled ? 'flex' : 'none' }}>
        <span id="navigation-info-text">
          {game.activeSide === userSide && game.status !== GameStatus.Finished ? 'Select one of your entities' : ''}
        </span>
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%' }}></div>

      {/* Active side indicator */}
      <S.ActiveSideBanner>
        {game.status === GameStatus.NotStarted && 'Game not started'}
        {game.status === GameStatus.InProgress && (isYourTurn ? 'Your turn' : "Opponent's turn")}
        {game.status === GameStatus.Paused && 'Game paused'}
        {game.status === GameStatus.Finished && game.outcome && (
          <S.WinnerTextWrapper outcome={game.outcome}>{getWinnerText(game.outcome)}</S.WinnerTextWrapper>
        )}
      </S.ActiveSideBanner>
    </S.NavigationContainer>
  )
}
