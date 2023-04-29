import Image from 'next/image'

import { EntityType, Player, TeamSide } from '@types'

import { HandleDeterminator } from './HandleDeterminator'
import * as S from './styles'
import { IconVictoryPoints } from '@components/Icons'

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
      <HandleDeterminator type={type} side={side} userSide={userSide} />

      <S.Header>
        <div>{player.user.username}</div>

        <S.VictoryPoints>
          <IconVictoryPoints width="17px" height="17px" fill="#8729b3" />
          {player.victoryPoints}
        </S.VictoryPoints>
      </S.Header>

      <S.Middle>
        <Image
          src={
            name !== 'Energetic Bear'
              ? `/images/entities/${type}.svg`
              : '/images/entities/espionage.svg'
          }
          width={30}
          height={30}
          alt="gchq"
        />

        <div>{name}</div>
      </S.Middle>

      <S.Footer>
        <div
          style={{
            backgroundColor: '#F0EAAF',
            color: '#877725',
            borderBottomLeftRadius: 5,
          }}
        >
          {player.resource}
        </div>

        <div
          style={{
            backgroundColor: '#B2CCD7',
            color: '#105881',
            borderBottomRightRadius: 5,
          }}
        >
          {player.vitality}
        </div>
      </S.Footer>

      {isActive && (
        <S.AnimationContainer
          color={side === TeamSide.Blue ? '#2e84c5' : '#b22222'}
        />
      )}
    </S.CardContainer>
  )
}
