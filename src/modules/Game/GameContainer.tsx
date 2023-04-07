import { IconHome, IconPlay } from '@components/Icons'
import { useAxios, useUserContext } from '@hooks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Battleground,
  BlueTeamBackground,
  Header,
  Navigation,
  RedTeamBackground,
} from './styles'
import { EntityContainer } from './Entity/EntityContainer'
import { EntityType } from '@types'

export const GameContainer = () => {
  const router = useRouter()
  const { id } = router.query

  const axios = useAxios()

  const user = useUserContext()

  const [game, setGame] = useState()
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    if (!id) return

    axios.get(`games/${id}`).then((res) => {
      setGame(res.data)
      setIsOwner(res.data.ownerId === user.user?.id)
    })
  }, [axios, id, user.user?.id])

  if (!user.user) return null

  return (
    <>
      <Header>
        <div
          style={{
            width: '250px',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              borderRight: 'solid 2px white',
              padding: '0 20px',
              marginRight: '20px',
            }}
          >
            {user.user?.username}
          </div>

          <IconHome width="24px" fill="#fff" />

          <div>{isOwner && <IconPlay width="30px" fill="#fff" />}</div>
        </div>

        <div
          style={{
            width: '250px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>{`Red Team's Turn`}</div>
          <div style={{ marginTop: '5px' }}>{`UK Government's Turn`}</div>
        </div>

        <div
          style={{
            width: '250px',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '20px',
          }}
        >
          January, 2020
        </div>
      </Header>

      <Battleground>
        <svg
          width="100%"
          height="50%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L100 0 L50 90 z" fill="rgba(190, 64, 55, 0.4)" />
          <path
            d="M100 0 L50 90 L0 0"
            stroke="firebrick"
            strokeWidth="0.1px"
            strokeDasharray="0.5 0.5"
            fill="none"
          />
        </svg>

        <svg
          width="100%"
          height="50%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 L100 100 L50 10 z" fill="rgba(48, 141, 193, 0.18)" />
          <path
            d="M100 100 L50 10 L0 100"
            stroke="#222281"
            strokeWidth="0.1px"
            strokeDasharray="0.5 0.5"
            fill="none"
          />
        </svg>

        <EntityContainer
          type={EntityType.People}
          side="blue"
          name="Electorate"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Industry}
          side="blue"
          name="UK PLC"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Government}
          side="blue"
          name="Government"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Energy}
          side="blue"
          name="UK Energy"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Intelligence}
          side="blue"
          name="GCHQ"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.People}
          side="red"
          name="Online Trolls"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Industry}
          side="red"
          name="Energetic Bear"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Government}
          side="red"
          name="Government"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Energy}
          side="red"
          name="Rosenergoatom"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Intelligence}
          side="red"
          name="SCS"
          player={user.user?.username}
          vp={12}
          imageUri="/images/gchq.jpg"
          resources={10}
          vitality={4}
        />
      </Battleground>

      <Navigation></Navigation>
    </>
  )
}
