import { errorRedColor } from '@colors'

import { User } from '@types'

import * as S from './styles'

interface PlayerSelectProps {
  entityName: string
  formRegister: any
  inputName: string
  users?: User[]
}

export const PlayerSelect = ({
  entityName,
  formRegister,
  inputName,
  users,
}: PlayerSelectProps) => {
  return (
    <S.SelectContainer>
      <S.SelectLabel>
        {entityName} Player<span style={{ color: errorRedColor }}> *</span>
      </S.SelectLabel>
      <S.StyledSelect {...formRegister(inputName)}>
        <option value="" hidden disabled>
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
