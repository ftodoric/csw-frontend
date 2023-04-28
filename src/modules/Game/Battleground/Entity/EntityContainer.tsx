import Image from 'next/image'

import { EntityType, Player, TeamSide } from '@types'

import { HandleDeterminator } from './HandleDeterminator'
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
      <HandleDeterminator type={type} side={side} userSide={userSide} />

      <S.Header>
        <div>{player.user.username}</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/victoryPoints.svg"
            width={20}
            height={20}
            alt="Victory Points"
          />
          {player.victoryPoints}
        </div>
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
        <div style={{ marginLeft: 10, maxWidth: '145px', textAlign: 'center' }}>
          {name}
        </div>
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
