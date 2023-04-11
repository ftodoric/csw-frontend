import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { IconHome, IconPlay } from '@components/Icons'
import { useGame, useUserContext } from '@hooks'
import { TeamSide } from '@types'

import { Battleground, TeamBackground } from './Battleground'
import * as S from './styles'
import { determineUserSide } from './utils'

export const GameContainer = () => {
  const { user } = useUserContext()
  const router = useRouter()
  const { id } = router.query
  const { data: game } = useGame(id as string | undefined)

  const [isOwner, setIsOwner] = useState(false)
  const [userSide, setUserSide] = useState(TeamSide.Blue)

  console.log(
    '%clog | description\n',
    'color: #0e8dbf; margin-bottom: 5px;',
    userSide
  )

  useEffect(() => {
    if (!user || !game) return

    setIsOwner(game.ownerId === user.id)

    const usersSide = determineUserSide(user, game)
    setUserSide(usersSide)
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
        <TeamBackground
          side={userSide === TeamSide.Blue ? TeamSide.Red : TeamSide.Blue}
        />
        <TeamBackground side={userSide} userSide />

        <Battleground game={game} userSide={userSide} />
      </S.Battleground>

      <S.Navigation></S.Navigation>
    </>
  )
}
