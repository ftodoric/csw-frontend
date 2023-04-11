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
    <S.TeamFormContainer
      style={{ alignItems: isBlueTeam ? 'flex-start' : 'flex-end' }}
    >
      <S.Title
        style={{
          color: isBlueTeam ? blueTeamColor : redTeamColor,
          paddingRight: isBlueTeam ? 10 : 0,
          paddingLeft: isBlueTeam ? 0 : 10,
        }}
      >
        {isBlueTeam ? 'Blue Team' : 'Red Team'}
      </S.Title>
      <S.TitleRule />

      <S.TeamNameInput
        placeholder="Team name"
        {...formRegister(isBlueTeam ? 'blueTeamName' : 'redTeamName')}
        style={{ textAlign: !isBlueTeam ? 'left' : 'right' }}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'Electorate' : 'Online Trolls'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'electoratePlayer' : 'onlineTrollsPlayer'}
        users={users}
        side={side}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK PLC' : 'Energetic Bear'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'ukPlcPlayer' : 'energeticBearPlayer'}
        users={users}
        side={side}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK Government' : 'Russian Government'}
        formRegister={formRegister}
        inputName={
          isBlueTeam ? 'ukGovernmentPlayer' : 'russianGovernmentPlayer'
        }
        users={users}
        side={side}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'UK Energy' : 'Rosenergoatom'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'ukEnergyPlayer' : 'rosenergoatomPlayer'}
        users={users}
        side={side}
      />

      <PlayerSelect
        entityName={isBlueTeam ? 'GCHQ' : 'SCS'}
        formRegister={formRegister}
        inputName={isBlueTeam ? 'gchqPlayer' : 'scsPlayer'}
        users={users}
        side={side}
      />
    </S.TeamFormContainer>
  )
}
