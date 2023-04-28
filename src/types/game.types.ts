import { TeamSide } from './team.types'
import { Team } from './team.types'

export enum GameStatus {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Finished = 'finished',
}

export enum GamePeriod {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12,
}

export enum GameOutcome {
  BlueWins = 0,
  RedWins = 1,
  Tie = 2,
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
  paused: boolean
  activePlayer: string
  activeSide: TeamSide
  activePeriod: GamePeriod
}
