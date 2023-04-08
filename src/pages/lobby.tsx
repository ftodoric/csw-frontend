import Head from 'next/head'

import { withAuth } from '@components/withAuth'
import { Lobby } from '@modules/Lobby'

export const LobbyPage = () => {
  return (
    <>
      <Head>
        <title>Cyber Warfare Game | Lobby</title>
      </Head>

      <Lobby />
    </>
  )
}

export default withAuth(LobbyPage)
