export enum TeamSide {
  Blue,
  Red,
}

export interface Team {
  id: string;
  side: TeamSide;
  name: string;
  peoplePlayerId: string;
  industryPlayerId: string;
  governmentPlayerId: string;
  energyPlayerId: string;
  intelligencePlayerId: string;
  game: Game;
}
