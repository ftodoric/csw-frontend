import { useAxios } from '@hooks'
import { useForm } from 'react-hook-form'
import { NewGameFormType } from './interface'

export const NewGameForm = () => {
  const axios = useAxios()
  const { register, handleSubmit } = useForm<NewGameFormType>()

  const onSubmit = async (data: NewGameFormType) => {
    const formData = {
      blueTeamName: 'Autobots',
      blueGovernmentPlayer: 'Physx',
      ukPlcPlayer: 'Physx',
      electoratePlayer: 'Physx',
      gchqPlayer: 'Physx',
      ukEnergyPlayer: 'Physx',

      redTeamName: 'Decepticons',
      redGovernmentPlayer: 'Azurrox',
      energeticBearPlayer: 'Azurrox',
      onlineTrollsPlayer: 'Azurrox',
      scsPlayer: 'Azurrox',
      rosenergoatomPlayer: 'Azurrox',

      description: 'A random game.',
    }

    try {
      const res = await axios.post('http://localhost:8000/api/games', formData)
    } catch (err) {
      console.log('%clog | err', 'color: red;')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', width: 400 }}
      >
        <input type="submit" />
      </form>
    </div>
  )
}
