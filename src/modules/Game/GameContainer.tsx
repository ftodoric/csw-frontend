import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { IconHome, IconPlay } from '@components/Icons'
import { useAxios, useUserContext } from '@hooks'
import { EntityType, TeamSide } from '@types'

import { SideBackground } from './Battleground'
import { EntityContainer } from './Entity/EntityContainer'
import * as S from './styles'

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
      <S.Header>
        <S.UserNav>
          <S.Username>{user.user?.username}</S.Username>

          <Link href="/lobby">
            <S.UserNavHoverWrapper>
              <IconHome width="26px" fill="#fff" />
            </S.UserNavHoverWrapper>
          </Link>

          <div style={{ marginLeft: 10 }}>
            {isOwner && (
              <S.UserNavHoverWrapper style={{ padding: '2px 2px 0' }}>
                <IconPlay width="32px" fill="white" />
              </S.UserNavHoverWrapper>
            )}
          </div>
        </S.UserNav>

        <S.Counter>2:14</S.Counter>

        <S.GamePeriod>January, 2020</S.GamePeriod>
      </S.Header>

      <S.Battleground>
        <SideBackground side={TeamSide.Red} />
        <SideBackground side={TeamSide.Blue} mySide />

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
      </S.Battleground>

      <S.Navigation></S.Navigation>
    </>
  )
}
