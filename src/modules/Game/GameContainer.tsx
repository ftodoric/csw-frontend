import Link from 'next/link'
import { useEffect, useState } from 'react'

import { IconHome, IconPlay } from '@components/Icons'
import { useGame, useUserContext } from '@hooks'
import { EntityType, TeamSide } from '@types'

import { SideBackground } from './Battleground'
import { EntityContainer } from './Entity/EntityContainer'
import * as S from './styles'
import { determineUserSide } from './utils'

export const GameContainer = () => {
  const { user } = useUserContext()
  const { data: game } = useGame()

  const [isOwner, setIsOwner] = useState(false)
  const [mySide, setMySide] = useState(TeamSide.Blue)

  useEffect(() => {
    if (!user || !game) return

    setIsOwner(game.ownerId === user.id)

    const usersSide = determineUserSide(user, game)
    setMySide(usersSide)
  }, [game, user])

  if (!user || !game) return null

  return (
    <>
      <S.Header>
        <S.UserNav>
          <S.Username>{user.username}</S.Username>

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
        <SideBackground
          side={mySide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue}
        />
        <SideBackground side={mySide} mySide />

        <EntityContainer
          type={EntityType.People}
          side={TeamSide.Blue}
          isUserSide={mySide === TeamSide.Blue}
          name="Electorate"
          player={game.blueTeam.peoplePlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Industry}
          side={TeamSide.Blue}
          isUserSide={mySide === TeamSide.Blue}
          name="UK PLC"
          player={game.blueTeam.industryPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Government}
          side={TeamSide.Blue}
          isUserSide={mySide === TeamSide.Blue}
          name="UK Government"
          player={game.blueTeam.governmentPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Energy}
          side={TeamSide.Blue}
          isUserSide={mySide === TeamSide.Blue}
          name="UK Energy"
          player={game.blueTeam.energyPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Intelligence}
          side={TeamSide.Blue}
          isUserSide={mySide === TeamSide.Blue}
          name="GCHQ"
          player={game.blueTeam.intelligencePlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.People}
          side={TeamSide.Red}
          isUserSide={mySide === TeamSide.Red}
          name="Online Trolls"
          player={game.redTeam.peoplePlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Industry}
          side={TeamSide.Red}
          isUserSide={mySide === TeamSide.Red}
          name="Energetic Bear"
          player={game.redTeam.industryPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Government}
          side={TeamSide.Red}
          isUserSide={mySide === TeamSide.Red}
          name="Russian Government"
          player={game.redTeam.governmentPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Energy}
          side={TeamSide.Red}
          isUserSide={mySide === TeamSide.Red}
          name="Rosenergoatom"
          player={game.redTeam.energyPlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />

        <EntityContainer
          type={EntityType.Intelligence}
          side={TeamSide.Red}
          isUserSide={mySide === TeamSide.Red}
          name="SCS"
          player={game.redTeam.intelligencePlayer.username}
          vp={12}
          resources={10}
          vitality={4}
        />
      </S.Battleground>

      <S.Navigation></S.Navigation>
    </>
  )
}
