import Image from 'next/image'

import { victoryPointsColor } from '@colors'
import { IconVictoryPoints } from '@components/Icons'
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
  const { type, side, name, player, userSide, isActive } = data

  return (
    <S.CardContainer id={isActive ? 'activePlayer' : undefined}>
      <EdgeHandleDeterminator type={type} side={side} />

      <S.Header>
        <div>{player.user.username}</div>

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

      {isActive && <S.AnimationContainer color={side === TeamSide.Blue ? '#2e84c5' : '#b22222'} />}
    </S.CardContainer>
  )
}
