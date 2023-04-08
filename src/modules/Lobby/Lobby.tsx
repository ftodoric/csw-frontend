import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { IconLogout } from '@components/Icons'
import { useAxios, useLogout, useUserContext } from '@hooks'
import { Game } from '@types'

import { GameItem } from './GameItem/GameItem'
import { ItemWrapper } from './GameItem/styles'
import { CreateWrapper, LogoutWrapper } from './styles'

export const Lobby = () => {
  const axios = useAxios()
  const logout = useLogout()
  const router = useRouter()

  const { user } = useUserContext()
  const [games, setGames] = useState<Game[]>()

  useEffect(() => {
    axios.get('/games').then((res) => {
      setGames(res.data)
    })
  }, [axios])

  const handleLogout = () => {
    logout.mutate()
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '600px',
          width: '100%',
          height: '50px',
          backgroundColor: 'firebrick',
          color: 'white',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontStyle: 'italic' }}>Cyber Warfare Game</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ marginRight: '20px' }}>Hi, {user!.username}</div>
          <LogoutWrapper onClick={handleLogout}>
            <IconLogout width="24px" height="24px" fill="white" />
          </LogoutWrapper>
        </div>
      </div>

      <div style={{ maxWidth: '600px', width: '100%', marginTop: '50px' }}>
        {games?.length ? (
          <>
            <ItemWrapper>
              <div>Blue Team</div>
              <div>Red Team</div>
              <div>Description</div>
              <div>Link to the game</div>
            </ItemWrapper>
            {games.map((game) => {
              return <GameItem key={game.id} game={game} />
            })}
          </>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            You havent play any games.
          </div>
        )}
      </div>

      <Link href="/create">
        <CreateWrapper>Create a new game</CreateWrapper>
      </Link>
    </div>
  )
}
