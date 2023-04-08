import Head from 'next/head'

import { withAuth } from '@components/withAuth'
import { Lobby } from '@modules/Lobby'

export const LobbyPage = () => {
  return (
    <>
      <Head>
        <title>CS Wargame | Lobby</title>
      </Head>

      <Lobby />
    </>
  )
}

export default withAuth(LobbyPage)
