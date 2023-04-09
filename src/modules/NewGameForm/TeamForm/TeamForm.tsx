import { User } from '@types'

import * as S from './styles'

interface TeamFormProps {
  teamName: string
  users?: User[]
  formRegister: any
}

export const TeamForm: React.FC<TeamFormProps> = ({
  teamName,
  users,
  formRegister,
}: TeamFormProps) => {
  return (
    <S.TeamFormContainer>
      <div></div>

      <input placeholder="Team name" />

      <select {...formRegister('electoratePlayer')}>
        {users?.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          )
        })}
      </select>

      <select {...formRegister('ukPlcPlayer')}>
        {users?.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          )
        })}
      </select>
    </S.TeamFormContainer>
  )
}
