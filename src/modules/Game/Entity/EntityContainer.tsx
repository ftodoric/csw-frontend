import Image from 'next/image'

import { EntityType, TeamSide } from '@types'

import { CardContainer, Footer, Header, Middle } from './styles'

interface EntityProps {
  type: EntityType
  side: TeamSide
  isUserSide: boolean
  name: string
  player: string
  vp: number
  resources: number
  vitality: number
}

export const EntityContainer = ({
  type,
  side,
  isUserSide,
  name,
  player,
  vp,
  resources,
  vitality,
}: EntityProps) => {
  const positions: Record<EntityType, string[]> = {
    [EntityType.People]: ['5%', '25%'],
    [EntityType.Industry]: ['5%', '75%'],
    [EntityType.Government]: ['20%', '50%'],
    [EntityType.Energy]: ['30%', '20%'],
    [EntityType.Intelligence]: ['30%', '80%'],
  }

  return (
    <CardContainer
      style={{
        top: isUserSide
          ? `calc(100% - ${positions[type][0]})`
          : positions[type][0],
        left: positions[type][1],
        transform: isUserSide ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
      }}
    >
      <Header>
        <div>{player}</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/victoryPoints.svg"
            width={20}
            height={20}
            alt="Victory Points"
          />
          {vp}
        </div>
      </Header>

      <Middle>
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
        <div style={{ marginLeft: 10 }}>{name}</div>
      </Middle>

      <Footer>
        <div
          style={{
            backgroundColor: '#F0EAAF',
            color: '#877725',
            borderBottomLeftRadius: 5,
          }}
        >
          {resources}
        </div>

        <div
          style={{
            backgroundColor: '#B2CCD7',
            color: '#105881',
            borderBottomRightRadius: 5,
          }}
        >
          {vitality}
        </div>
      </Footer>
    </CardContainer>
  )
}
