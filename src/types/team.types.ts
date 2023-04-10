import { Game } from './game.types'
import { User } from './user.types'

export enum TeamSide {
  Blue,
  Red,
}

export interface Team {
  id: string
  side: TeamSide
  name: string
  peoplePlayer: User
  industryPlayer: User
  governmentPlayer: User
  energyPlayer: User
  intelligencePlayer: User
  game: Game
}
