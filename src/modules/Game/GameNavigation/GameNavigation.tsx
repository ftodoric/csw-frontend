import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useMakeGameAction, useUserContext } from '@hooks'
import { Game, GameAction, GameStatus, PlayerType } from '@types'

import * as S from './styles'

interface NavigationProps {
  game: Game
}

export const GameNavigation = ({ game }: NavigationProps) => {
  const { user } = useUserContext()
  const queryClient = useQueryClient()
  const makeGameAction = useMakeGameAction(game.id)

  const [isUsersTurn, setUsersTurn] = useState(false)
  const [isNavigationDisabled, setNavigationDisabled] = useState(true)

  useEffect(() => {
    if (user && game) {
      // Set is user active
      const activeUserId = (game as any)[game.activeSide][game.activePlayer].user.id
      setUsersTurn(activeUserId === user.id)
    }
  }, [game, user, queryClient])

  useEffect(() => {
    if (!isUsersTurn || game.status === GameStatus.NotStarted || game.status === GameStatus.Paused) {
      setNavigationDisabled(true)
    } else {
      setNavigationDisabled(false)
    }
  }, [game.status, isUsersTurn])

  const handleGameAction = (gameAction: GameAction) => {
    switch (gameAction) {
      case GameAction.DISTRIBUTE:
      case GameAction.REVITALISE:
      case GameAction.ATTACK:
      case GameAction.ABSTAIN:
        makeGameAction.mutate({ actionType: gameAction })
        break
    }
  }

  return (
    <S.NavigationContainer>
      <div style={{ width: '150px', height: '100%' }}></div>

      <S.NavigationActions>
        <S.ActionButtonWrapper
          bgColor="rgb(240, 234, 175)"
          title="Distribute"
          onClick={() => console.log('clicked')}
          disabled={isNavigationDisabled}
        >
          <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(178, 204, 215)" title="Revitalise" disabled={isNavigationDisabled}>
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgba(190, 64, 55, 0.4)" title="Attack" disabled={isNavigationDisabled}>
          <IconAttack height="100%" fill="rgb(143, 75, 70)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper
          bgColor="rgb(237, 204, 157)"
          title="Abstain"
          disabled={isNavigationDisabled}
          onClick={() => handleGameAction(GameAction.ABSTAIN)}
        >
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>

        {true && (
          <S.ActionButtonWrapper bgColor="rgb(68, 68, 68)" title="Black Market" disabled={isNavigationDisabled}>
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%' }}></div>
    </S.NavigationContainer>
  )
}
