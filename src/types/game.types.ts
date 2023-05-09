import { TeamSide } from './team.types'
import { Team } from './team.types'

export enum GameStatus {
  NotStarted = 'notStarted',
  Paused = 'paused',
  InProgress = 'inProgress',
  Finished = 'finished',
}

export enum GamePeriod {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum GameOutcome {
  BlueWins,
  RedWins,
  Tie,
}

export interface Game {
  id: string
  ownerId: string
  blueTeam: Team
  redTeam: Team
  status: GameStatus
  description?: string
  outcome?: GameOutcome
  turnsRemainingTime: number
  activePlayer: string
  activeSide: TeamSide
  activePeriod: GamePeriod
}

export enum GameAction {
  DISTRIBUTE = 'distribute',
  REVITALISE = 'revitalise',
  ATTACK = 'attack',
  ABSTAIN = 'abstain',
}

export enum PlayerType {
  People = 'peoplePlayer',
  Industry = 'industryPlayer',
  Government = 'governmentPlayer',
  Energy = 'energyPlayer',
  Intelligence = 'intelligencePlayer',
}
