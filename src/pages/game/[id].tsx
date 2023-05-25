import { IncomingMessage } from 'http'
import { NextPageContext } from 'next'
import Head from 'next/head'

import { withAuth } from '@components/withAuth'
import { GameActionContextProvider } from '@modules/Game/context/GameActionContext'
import { GameContextProvider } from '@modules/Game/context/GameContext'
import { GameContainer } from '@modules/Game/GameContainer'

type GamePageParams = {
  id: string
}

interface GamePageContext extends NextPageContext {
  req: IncomingMessage
  params: GamePageParams
}

interface GamePageProps {
  gameId: string
}

const GamePage = ({ gameId }: GamePageProps) => {
  return (
    <>
      <Head>
        <title>CS Wargame | Play</title>
      </Head>

      <GameContextProvider>
        <GameActionContextProvider>
          <GameContainer gameId={gameId} />
        </GameActionContextProvider>
      </GameContextProvider>
    </>
  )
}

export async function getServerSideProps(ctx: GamePageContext) {
  let gameId = ''

  try {
    gameId = ctx.params.id
  } catch (error) {
    return { error: Error('Game ID not provided.') }
  }

  return { props: { gameId } }
}

export default withAuth(GamePage)
