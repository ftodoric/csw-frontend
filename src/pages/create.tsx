import { withAuth } from '@components/withAuth'
import { NewGameForm } from '@modules/NewGameForm'

export const LobbyPage = () => {
  return (
    <div>
      <NewGameForm />
    </div>
  )
}

export default withAuth(LobbyPage)
