import { PlayerType } from './game.types'
import { TeamSide } from './team.types'
import { User } from './user.types'

export interface Player {
  id: string
  user: User
  side: TeamSide
  type: PlayerType
  resource: number
  vitality: number
  victoryPoints: number
  hasMadeAction: boolean
  biddingBanRemainingTurns: number
  hasMadeBid: boolean
  attackBanRemainingTurns: number
  paralysisRemainingTurns: number
}
