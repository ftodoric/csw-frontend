import Head from 'next/head'

import { withAuth } from '@components/withAuth'
import { GameContainer } from '@modules/Game/GameContainer'

const GamePage = () => {
  return (
    <>
      <Head>
        <title>Cyber Warfare Game | Play</title>
      </Head>

      <GameContainer />
    </>
  )
}

export default withAuth(GamePage)
