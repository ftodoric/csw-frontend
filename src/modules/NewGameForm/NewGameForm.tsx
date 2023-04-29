import Link from 'next/link'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { secondaryColor } from '@colors'
import { IconHome, IconLogout } from '@components/Icons'
import { useCreateGame, useLogout, useUserContext } from '@hooks'
import { useAllUsers } from '@hooks/auth/useAllUsers'
import * as S from '@modules/Lobby/styles'
import { newGameFormSchema, NewGameFormType, TeamSide, User } from '@types'

import { FormContainer, GameDescContainer, ErrorContainer, SubmitButton, TeamsContainer, VersusLabel } from './styles'
import { TeamForm } from './TeamForm'

export const NewGameForm = () => {
  const { user } = useUserContext()
  const logout = useLogout()
  const { data: users } = useAllUsers()

  const createGame = useCreateGame()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewGameFormType>({ resolver: zodResolver(newGameFormSchema) })

  const onSubmit = (data: NewGameFormType) => {
    createGame.mutate(data)
  }

  const handleLogout = () => {
    logout.mutate()
  }

  const isTeamNameError = errors.blueTeamName || errors.redTeamName

  const isPlayersError =
    errors.electoratePlayer ||
    errors.ukPlcPlayer ||
    errors.ukGovernmentPlayer ||
    errors.ukEnergyPlayer ||
    errors.gchqPlayer ||
    errors.onlineTrollsPlayer ||
    errors.energeticBearPlayer ||
    errors.russianGovernmentPlayer ||
    errors.rosenergoatomPlayer ||
    errors.scsPlayer

  return (
    <S.LobbyContainer>
      <S.Navbar>
        <S.NavbarLeft>Cyber Security Wargame</S.NavbarLeft>

        <S.NavbarRight>
          <div>Hi, {user!.username}</div>

          <S.NavLinkContainer>
            <Link href="/lobby">
              <IconHome width="26px" height="26px" fill={secondaryColor} />
            </Link>
          </S.NavLinkContainer>

          <S.NavLinkContainer id="logout" onClick={handleLogout}>
            <IconLogout width="24px" height="24px" fill={secondaryColor} />
          </S.NavLinkContainer>
        </S.NavbarRight>
      </S.Navbar>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TeamsContainer>
          <TeamForm side={TeamSide.Blue} users={users} formRegister={register} />

          <TeamForm side={TeamSide.Red} users={users} formRegister={register} />

          <VersusLabel>VS</VersusLabel>
        </TeamsContainer>

        <GameDescContainer>
          <textarea placeholder="Enter description here." {...register('description')} />
        </GameDescContainer>

        <SubmitButton type="submit" value="Create" />

        {isTeamNameError && <ErrorContainer>Team names are required.</ErrorContainer>}

        {isPlayersError && <ErrorContainer>All players must be assigned.</ErrorContainer>}
      </FormContainer>

      {/* Bottom padding */}
      <div style={{ marginTop: '50px' }}></div>
    </S.LobbyContainer>
  )
}
