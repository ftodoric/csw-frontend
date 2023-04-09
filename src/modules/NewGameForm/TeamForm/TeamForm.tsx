import { blueTeamColor, redTeamColor } from '@colors'

import { TeamSide, User } from '@types'

import { PlayerSelect } from './PlayerSelect'
import * as S from './styles'

interface TeamFormProps {
  side: TeamSide
  users?: User[]
  formRegister: any
}

export const TeamForm: React.FC<TeamFormProps> = ({
  side,
  users,
  formRegister,
}: TeamFormProps) => {
  const isBlueTeam = side === TeamSide.Blue

  return (
    <S.TeamFormContainer>
      <S.Title
        style={{
          color: isBlueTeam ? blueTeamColor : redTeamColor,
        }}
      >
        {isBlueTeam ? 'Blue Team' : 'Red Team'}
      </S.Title>
      <S.TitleRule />

      <S.TeamNameInput placeholder="Team name" />

      <PlayerSelect
        entityName={isBlueTeam ? 'Electorate' : 'Online Trolls'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'electoratePlayer' : 'onlineTrollsPlayer'}
        users={users}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK PLC' : 'Energetic Bear'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'ukPlcPlayer' : 'energeticBearPlayer'}
        users={users}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK Government' : 'Russian Government'}
        formRegister={formRegister}
        inputName={
          isBlueTeam ? 'ukGovernmentPlayer' : 'russianGovernmentPlayer'
        }
        users={users}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK Energy' : 'Rosenergoatom'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'ukEnergyPlayer' : 'rosenergoatomPlayer'}
        users={users}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'GCHQ' : 'SCS'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'gchqPlayer' : 'scsPlayer'}
        users={users}
      />
    </S.TeamFormContainer>
  )
}
