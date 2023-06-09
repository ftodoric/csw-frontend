import { GameAction, PlayerType } from './game.types'
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
  madeAction: GameAction
  biddingBanRemainingTurns: number
  hasMadeBid: boolean
  attackBanRemainingTurns: number
  paralysisRemainingTurns: number
  isSplashImmune: boolean
  hasCyberInvestmentProgramme: boolean
  wasRansomwareAttacked: boolean
}
