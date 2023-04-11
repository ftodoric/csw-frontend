import { User } from './user.types'

export interface Player {
  user: User
  resource: number
  vitality: number
  victoryPoints: number
}
