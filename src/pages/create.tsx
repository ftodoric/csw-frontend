import Head from 'next/head'

import { withAuth } from '@components/withAuth'
import { NewGameForm } from '@modules/NewGameForm'

export const LobbyPage = () => {
  return (
    <>
      <Head>
        <title>CS Wargame | Create new game</title>
      </Head>

      <div>
        <NewGameForm />
      </div>
    </>
  )
}

export default withAuth(LobbyPage)
