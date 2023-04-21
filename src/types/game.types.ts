import { TeamSide } from './team.types'
import { Team } from './team.types'

export enum GameStatus {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Finished = 'finished',
}

export interface Game {
  id: string
  ownerId: string
  blueTeam: Team
  redTeam: Team
  status: GameStatus
  description: string
  winner: Team
  turnsRemainingTime: number
  paused: boolean
  activePlayer: string
  activeSide: TeamSide
}
