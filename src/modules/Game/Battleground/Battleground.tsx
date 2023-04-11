import { EntityType, Game, TeamSide } from '@types'

import { EntityContainer } from './Entity'

interface BattlegroundProps {
  game: Game
  userSide: TeamSide
}

export const Battleground = ({ game, userSide }: BattlegroundProps) => {
  return (
    <>
      <EntityContainer
        type={EntityType.People}
        side={TeamSide.Blue}
        player={game.blueTeam.peoplePlayer}
        name="Electorate"
        isUserSide={userSide === TeamSide.Blue}
      />

      <EntityContainer
        type={EntityType.Industry}
        side={TeamSide.Blue}
        isUserSide={userSide === TeamSide.Blue}
        name="UK PLC"
        player={game.blueTeam.industryPlayer}
      />

      <EntityContainer
        type={EntityType.Government}
        side={TeamSide.Blue}
        isUserSide={userSide === TeamSide.Blue}
        name="UK Government"
        player={game.blueTeam.governmentPlayer}
      />

      <EntityContainer
        type={EntityType.Energy}
        side={TeamSide.Blue}
        isUserSide={userSide === TeamSide.Blue}
        name="UK Energy"
        player={game.blueTeam.energyPlayer}
      />

      <EntityContainer
        type={EntityType.Intelligence}
        side={TeamSide.Blue}
        isUserSide={userSide === TeamSide.Blue}
        name="GCHQ"
        player={game.blueTeam.intelligencePlayer}
      />

      <EntityContainer
        type={EntityType.People}
        side={TeamSide.Red}
        isUserSide={userSide === TeamSide.Red}
        name="Online Trolls"
        player={game.redTeam.peoplePlayer}
      />

      <EntityContainer
        type={EntityType.Industry}
        side={TeamSide.Red}
        isUserSide={userSide === TeamSide.Red}
        name="Energetic Bear"
        player={game.redTeam.industryPlayer}
      />

      <EntityContainer
        type={EntityType.Government}
        side={TeamSide.Red}
        isUserSide={userSide === TeamSide.Red}
        name="Russian Government"
        player={game.redTeam.governmentPlayer}
      />

      <EntityContainer
        type={EntityType.Energy}
        side={TeamSide.Red}
        isUserSide={userSide === TeamSide.Red}
        name="Rosenergoatom"
        player={game.redTeam.energyPlayer}
      />

      <EntityContainer
        type={EntityType.Intelligence}
        side={TeamSide.Red}
        isUserSide={userSide === TeamSide.Red}
        name="SCS"
        player={game.redTeam.intelligencePlayer}
      />
    </>
  )
}
