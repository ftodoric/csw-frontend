import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

import { victoryPointsColor } from '@colors'
import {
  IconAbstain,
  IconAttack,
  IconBlackMarket,
  IconDistribute,
  IconRevitalise,
  IconVictoryPoints,
} from '@components/Icons'
import { useUserContext } from '@hooks'
import { removePlayer, setPlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { entityNames } from '@modules/Game/utils'
import { EntityType, GameAction, GameStatus, Player, TeamSide } from '@types'

import { EdgeHandleDeterminator } from './EdgeHandleDeterminator'
import * as S from './styles'

interface EntityProps {
  type: EntityType
  side: TeamSide
  name: string
  player: Player
  userSide: TeamSide
  activeSide: TeamSide
  isActive?: boolean
  setObjectivesModalEntity: Dispatch<SetStateAction<string | null>>
}

export const EntityContainer = ({ data }: { data: EntityProps }) => {
  const { type, side, name, player, userSide, isActive } = data

  // withAuth component provides user check
  const { user } = useUserContext()
  const { id: userId } = user!

  // GameContainer component provides game data check
  const { game } = useGameContext()
  const { status } = game!

  const { state, dispatch } = useGameActionContext()
  const { selectedPlayer } = state

  const isEntityClickable = !!isActive && player.user.id === userId && status === GameStatus.InProgress

  return (
    <S.CardContainer
      id={isActive ? 'activePlayer' : undefined}
      isClickable={isEntityClickable}
      onClick={() => {
        if (isEntityClickable) {
          dispatch(setPlayer(player))
        } else {
          dispatch(removePlayer())
        }
      }}
    >
      <EdgeHandleDeterminator type={type} side={side} />

      <S.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {player.user.username}
          <span style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
            {player.madeAction === GameAction.DISTRIBUTE && (
              <IconDistribute width="16px" height="16px" fill="rgb(135, 119, 37)" />
            )}
            {player.madeAction === GameAction.REVITALISE && (
              <IconRevitalise width="16px" height="16px" fill="rgb(16, 88, 129)" />
            )}
            {player.madeAction === GameAction.ABSTAIN && (
              <IconAbstain width="16px" height="16px" fill="rgb(176, 128, 61)" />
            )}
            {player.madeAction === GameAction.ATTACK && (
              <IconAttack width="16px" height="16px" fill="rgb(143, 75, 70)" />
            )}
            {player.madeAction === GameAction.ACCESS_BLACK_MARKET && (
              <IconBlackMarket width="16px" height="16px" fill="rgb(68, 68, 68)" />
            )}
          </span>
        </div>

        <S.VictoryPoints
          onClick={(e) => {
            e.stopPropagation()
            data.setObjectivesModalEntity(entityNames[side as TeamSide][player.type])
          }}
        >
          <IconVictoryPoints width="17px" height="17px" fill={victoryPointsColor} />
          {player.victoryPoints}
        </S.VictoryPoints>
      </S.Header>

      <S.Middle>
        <Image
          src={name !== 'Energetic Bear' ? `/images/entities/${type}.svg` : '/images/entities/espionage.svg'}
          width={30}
          height={30}
          alt="gchq"
        />

        <div>{name}</div>
      </S.Middle>

      <S.Footer>
        <div id="resource">{player.resource}</div>

        <div id="vitality">{player.vitality}</div>
      </S.Footer>

      {selectedPlayer?.id === player.id && (
        <S.AnimationContainer color={side === TeamSide.Blue ? '#2e84c5' : '#b22222'} />
      )}
    </S.CardContainer>
  )
}
