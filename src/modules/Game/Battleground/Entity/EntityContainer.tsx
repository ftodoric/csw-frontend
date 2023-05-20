import Image from 'next/image'

import { victoryPointsColor } from '@colors'
import { IconCheck, IconVictoryPoints } from '@components/Icons'
import { useUserContext } from '@hooks'
import { useEntityDispatch, useEntityState } from '@modules/Game/PlayerContext'
import { EntityType, Player, TeamSide } from '@types'

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
}

export const EntityContainer = ({ data }: { data: EntityProps }) => {
  const { user } = useUserContext()

  const { type, side, name, player, userSide, isActive } = data

  const entityPlayer = useEntityState()
  const dispatch = useEntityDispatch()

  const isEntityClickable = !!isActive && player.user.id === user?.id

  return (
    <S.CardContainer
      id={isActive ? 'activePlayer' : undefined}
      isClickable={isEntityClickable}
      onClick={() => {
        if (isEntityClickable) {
          dispatch({ type: 'SET_ENTITY', payload: player })
        } else {
          dispatch({ type: 'RESET_ENTITY' })
        }
      }}
    >
      <EdgeHandleDeterminator type={type} side={side} />

      <S.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {player.user.username}
          {player.hasMadeAction && (
            <span style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
              <IconCheck width="16px" height="16px" fill="#4b9241" />
            </span>
          )}
        </div>

        <S.VictoryPoints>
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

      {entityPlayer?.id === player.id && (
        <S.AnimationContainer color={side === TeamSide.Blue ? '#2e84c5' : '#b22222'} />
      )}
    </S.CardContainer>
  )
}
