import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { IconHome, IconLogout } from '@components/Icons'
import { useLogout, useUserContext } from '@hooks'
import { useAllUsers } from '@hooks/auth/useAllUsers'
import * as S from '@modules/Lobby/styles'

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
            teamName="Blue Team"
            users={users}
            formRegister={register}
          />

          <TeamForm teamName="Red Team" users={users} formRegister={register} />
        </TeamsContainer>

        <textarea
          style={{
            marginTop: 20,
            width: '90%',
            height: '100px',
            resize: 'vertical',
          }}
        >
          nesto
        </textarea>

        <input type="submit" value="Create" style={{ marginTop: 20 }} />
      </FormContainer>
    </S.LobbyContainer>
  )
}
