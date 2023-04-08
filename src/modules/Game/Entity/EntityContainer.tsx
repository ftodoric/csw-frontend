import Image from 'next/image'

import { EntityType } from '@types'

import { CardContainer, Footer, Header, Middle } from './styles'

interface EntityProps {
  type: EntityType
  side: string
  name: string
  player: string
  vp: number
  imageUri: string
  resources: number
  vitality: number
}

export const EntityContainer = ({
  type,
  side,
  name,
  player,
  vp,
  imageUri,
  resources,
  vitality,
}: EntityProps) => {
  const positions: Record<EntityType, string[]> = {
    [EntityType.People]: ['5%', '30%'],
    [EntityType.Industry]: ['5%', '70%'],
    [EntityType.Government]: ['20%', '50%'],
    [EntityType.Energy]: ['30%', '25%'],
    [EntityType.Intelligence]: ['30%', '75%'],
  }

  return (
    <CardContainer
      style={{
        top:
          side === 'blue'
            ? positions[type][0]
            : `calc(100% - ${positions[type][0]})`,
        left: positions[type][1],
        transform:
          side === 'red' ? 'translate(-50%, -100%)' : 'translate(-50%, 0)',
      }}
    >
      <Header>
        <div>{player}</div>
        <div>{name}</div>
        <div>{vp}</div>
      </Header>

      <Middle>
        <Image src={imageUri} width={100} height={45} alt="gchq" />
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
