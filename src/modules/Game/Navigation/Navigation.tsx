import { useEffect, useState } from 'react'

import { IconAbstain, IconAttack, IconBlackMarket, IconDistribute, IconRevitalise } from '@components/Icons'
import { useUserContext } from '@hooks'
import { Game } from '@types'

import * as S from './styles'

interface NavigationProps {
  game: Game
}

export const Navigation = ({ game }: NavigationProps) => {
  const { user } = useUserContext()

  const [isUsersTurn, setUsersTurn] = useState(false)

  useEffect(() => {
    if (user && game) {
      const activeUserId = (game as any)[game.activeSide][game.activePlayer].user.id
      setUsersTurn(activeUserId === user.id)
    }
  }, [game, user])

  return (
    <S.NavigationContainer>
      <div style={{ width: '150px', height: '100%' }}></div>

      <S.NavigationActions>
        <S.ActionButtonWrapper
          bgColor="rgb(240, 234, 175)"
          title="Distribute"
          onClick={() => console.log('clicked')}
          disabled={!isUsersTurn}
        >
          <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(178, 204, 215)" title="Revitalise" disabled={!isUsersTurn}>
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgba(190, 64, 55, 0.4)" title="Attack" disabled={!isUsersTurn}>
          <IconAttack height="100%" fill="rgb(143, 75, 70)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(237, 204, 157)" title="Abstain" disabled={!isUsersTurn}>
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>

        {true && (
          <S.ActionButtonWrapper bgColor="rgb(68, 68, 68)" title="Black Market" disabled={!isUsersTurn}>
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%' }}></div>
    </S.NavigationContainer>
  )
}
