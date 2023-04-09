import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IconHome, IconLogout } from '@components/Icons'
import { useLogout, useUserContext } from '@hooks'
import { useAllUsers } from '@hooks/auth/useAllUsers'
import * as S from '@modules/Lobby/styles'
import { TeamSide } from '@types'

import { NewGameFormType, newGameFormSchema } from './interface'
import { FormContainer, TeamsContainer } from './styles'
import { TeamForm } from './TeamForm'

export const NewGameForm = () => {
  const { user } = useUserContext()
  const logout = useLogout()
  const { data: users } = useAllUsers()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewGameFormType>({ resolver: zodResolver(newGameFormSchema) })

  const onSubmit = async (data: NewGameFormType) => {
    console.log(
      '%clog | new game submit\n',
      'color: #0e8dbf; margin-bottom: 5px;',
      data
    )
  }

  const handleLogout = () => {
    logout.mutate()
  }

  return (
    <S.LobbyContainer>
      <S.Navbar>
        <S.NavbarLeft>Cyber Security Wargame</S.NavbarLeft>

        <S.NavbarRight>
          <div>Hi, {user!.username}</div>

          <S.NavLinkContainer>
            <Link href="/lobby">
              <IconHome width="24px" height="24px" fill="white" />
            </Link>
          </S.NavLinkContainer>

          <S.NavLinkContainer onClick={handleLogout}>
            <IconLogout width="24px" height="24px" fill="white" />
          </S.NavLinkContainer>
        </S.NavbarRight>
      </S.Navbar>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TeamsContainer>
          <TeamForm
            side={TeamSide.Blue}
            users={users}
            formRegister={register}
          />

          <TeamForm side={TeamSide.Red} users={users} formRegister={register} />
        </TeamsContainer>

        <div
          style={{
            width: '100%',
            padding: '0 10px',
            boxSizing: 'border-box',
            marginTop: 50,
          }}
        >
          <textarea
            placeholder="Enter description here."
            style={{
              width: '100%',
              height: '100px',
              resize: 'vertical',
              padding: '10px',
              boxSizing: 'inherit',
              borderColor: '#cacaca',
              borderRadius: '4px',
            }}
          >
            nesto
          </textarea>
        </div>

        <input type="submit" value="Create" style={{ marginTop: 20 }} />
      </FormContainer>
    </S.LobbyContainer>
  )
}
