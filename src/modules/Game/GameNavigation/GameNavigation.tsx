import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useMakeGameAction, useUserContext } from '@hooks'
import { Game, GameAction, GameStatus, TeamSide } from '@types'

import * as S from './styles'
import { useEntityDispatch, useEntityState } from '../PlayerContext'
import { getWinnerText } from '../utils'

interface NavigationProps {
  game: Game
  userSide: TeamSide
}

export const GameNavigation = ({ game, userSide }: NavigationProps) => {
  const { user } = useUserContext()
  const queryClient = useQueryClient()
  const makeGameAction = useMakeGameAction(game.id)

  const selectedEntity = useEntityState()
  const dispatch = useEntityDispatch()
  const [isNavigationDisabled, setNavigationDisabled] = useState(true)
  const [areNavigationButtonDisabled, setNavigationButtonsDisabled] = useState(true)

  useEffect(() => {
    if (user) {
      if (selectedEntity) {
        console.log('%clog | description\n', 'color: #0e8dbf; margin-bottom: 5px;', selectedEntity)
        if (selectedEntity.user.id === user.id) {
          setNavigationDisabled(false)
        }

        if (!selectedEntity.hasMadeAction) setNavigationButtonsDisabled(false)
        else setNavigationButtonsDisabled(true)
      } else setNavigationDisabled(true)
    }
  }, [game, user, selectedEntity, queryClient])

  const handleGameAction = (gameAction: GameAction) => {
    switch (gameAction) {
      case GameAction.DISTRIBUTE:
      case GameAction.REVITALISE:
      case GameAction.ATTACK:
      case GameAction.ABSTAIN:
        makeGameAction.mutate({ actionType: gameAction, payload: { entityPlayer: selectedEntity } })
        queryClient.invalidateQueries('game')
        dispatch({ type: 'RESET_ENTITY' })
        break
    }
  }

  return (
    <S.NavigationContainer>
      {/* Message log */}
      <div style={{ width: '150px', height: '100%' }}></div>

      <S.NavigationActions style={{ display: isNavigationDisabled ? 'none' : 'flex' }}>
        <S.ActionButtonWrapper
          bgColor="rgb(240, 234, 175)"
          title="Distribute"
          onClick={() => console.log('clicked')}
          disabled={areNavigationButtonDisabled}
        >
          <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(178, 204, 215)" title="Revitalise" disabled={areNavigationButtonDisabled}>
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgba(190, 64, 55, 0.4)" title="Attack" disabled={areNavigationButtonDisabled}>
          <IconAttack height="100%" fill="rgb(143, 75, 70)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper
          bgColor="rgb(237, 204, 157)"
          title="Abstain"
          disabled={areNavigationButtonDisabled}
          onClick={() => handleGameAction(GameAction.ABSTAIN)}
        >
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>

        {true && (
          <S.ActionButtonWrapper bgColor="rgb(68, 68, 68)" title="Black Market" disabled={areNavigationButtonDisabled}>
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
      </S.NavigationActions>

      <S.NavigationActions style={{ display: isNavigationDisabled ? 'flex' : 'none' }}>
        <span id="navigation-info-text">{game.activeSide === userSide ? 'Select one of your entities' : ''}</span>
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%' }}></div>

      {/* Active side indicator */}
      <S.ActiveSideBanner>
        {game.status === GameStatus.NotStarted && 'Game not started'}
        {game.status === GameStatus.InProgress &&
          (game.activeSide == TeamSide.Blue && userSide === TeamSide.Blue ? 'Your turn' : "Opponent's turn")}
        {game.status === GameStatus.Paused && 'Game paused'}
        {game.status === GameStatus.Finished && game.outcome && getWinnerText(game.outcome)}
      </S.ActiveSideBanner>
    </S.NavigationContainer>
  )
}
