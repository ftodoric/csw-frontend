import { errorRedColor } from '@colors'

import { TeamSide, User } from '@types'

import * as S from './styles'

interface PlayerSelectProps {
  entityName: string
  formRegister: any
  inputName: string
  users?: User[]
  side: TeamSide
}

export const PlayerSelect = ({
  entityName,
  formRegister,
  inputName,
  users,
  side,
}: PlayerSelectProps) => {
  const isBlueTeam = side === TeamSide.Blue

  return (
    <S.SelectContainer>
      <S.SelectLabel
        style={{
          justifyContent: isBlueTeam ? 'flex-start' : 'flex-end',
        }}
      >
        {entityName} Player
        <span style={{ color: errorRedColor, marginLeft: '2px' }}>*</span>
      </S.SelectLabel>
      <S.StyledSelect
        {...formRegister(inputName)}
        style={{ textAlign: isBlueTeam ? 'left' : 'right' }}
      >
        <option value="" hidden>
          Select player
        </option>
        {users?.map((user) => {
          return (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          )
        })}
      </S.StyledSelect>
    </S.SelectContainer>
  )
}
