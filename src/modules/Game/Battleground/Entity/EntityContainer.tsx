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
  isActive?: boolean
}

export const EntityContainer = ({ data }: { data: EntityProps }) => {
  const { user } = useUserContext()

  const { type, side, name, player, userSide, isActive } = data

  const entityPlayer = useEntityState()
  const dispatch = useEntityDispatch()

  return (
    <S.CardContainer
      id={isActive ? 'activePlayer' : undefined}
      isClickable={player.user.id === user?.id}
      onClick={() => {
        if (player.user.id === user?.id) {
          dispatch({ type: 'SET_ENTITY', payload: player })
        } else {
          dispatch({ type: 'RESET_ENTITY' })
        }
      }}
      style={{ boxShadow: entityPlayer?.id === player.id ? '0 0 10px #b45ccd' : undefined }}
    >
      <EdgeHandleDeterminator type={type} side={side} />

      <S.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {player.user.username}
          <span style={{ marginLeft: '5px', display: 'flex', alignItems: 'center' }}>
            <IconCheck width="16px" height="16px" fill="#4b9241" />
          </span>
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

      {/* {isActive && <S.AnimationContainer color={side === TeamSide.Blue ? '#2e84c5' : '#b22222'} />} */}
    </S.CardContainer>
  )
}
