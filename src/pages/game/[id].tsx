import { withAuth } from '@components/withAuth'
import { GameContainer } from '@modules/Game/GameContainer'

const GamePage = () => {
  return <GameContainer />
}

export default withAuth(GamePage)
