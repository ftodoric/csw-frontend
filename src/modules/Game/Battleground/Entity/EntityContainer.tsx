import Image from 'next/image'

import { EntityType, Player, TeamSide } from '@types'

import * as S from './styles'

interface EntityProps {
  type: EntityType
  side: TeamSide
  name: string
  player: Player
  isUserSide: boolean
  isActive?: boolean
}

export const EntityContainer = ({
  type,
  side,
  isUserSide,
  name,
  player,
  isActive,
}: EntityProps) => {
  const positions: Record<EntityType, string[]> = {
    [EntityType.People]: ['5%', '25%'],
    [EntityType.Industry]: ['5%', '75%'],
    [EntityType.Government]: ['20%', '50%'],
    [EntityType.Energy]: ['30%', '20%'],
    [EntityType.Intelligence]: ['30%', '80%'],
  }

  return (
    <S.CardContainer
      style={{
        top: isUserSide
          ? `calc(100% - ${positions[type][0]})`
          : positions[type][0],
        left: positions[type][1],
        transform: isUserSide ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
        // boxShadow: isActive ? '0 1px 10px rgb(48, 140, 193)' : undefined,
      }}
      id={isActive ? 'activePlayer' : undefined}
    >
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
