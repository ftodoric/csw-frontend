import Link from 'next/link'

import { secondaryColor } from '@colors'
import { IconHome, IconLogout } from '@components/Icons'
import { useGames, useLogout, useUserContext } from '@hooks'

import { GameList } from './GameList/GameList'
import * as S from './styles'

export const Lobby = () => {
  const logout = useLogout()

  const { user } = useUserContext()
  const { data: gameList } = useGames()

  const handleLogout = () => {
    logout.mutate()
  }

  return (
    <S.LobbyContainer>
      <S.Navbar>
        <S.NavbarLeft>Cyber Security Wargame</S.NavbarLeft>

        <S.NavbarRight>
          <div>Hi, {user!.username}</div>

          <S.NavLinkContainer>
            <Link href="/lobby">
              <IconHome width="26px" height="26px" fill={secondaryColor} />
            </Link>
          </S.NavLinkContainer>

          <S.NavLinkContainer id="logout" onClick={handleLogout}>
            <IconLogout width="24px" height="24px" fill={secondaryColor} />
          </S.NavLinkContainer>
        </S.NavbarRight>
      </S.Navbar>

      <GameList gameList={gameList} />

      <div
        style={{
          marginTop: 80,
        }}
      >
        <Link href="/new">
          <S.CreateWrapper>Create a new game</S.CreateWrapper>
        </Link>
      </div>
    </S.LobbyContainer>
  )
}
