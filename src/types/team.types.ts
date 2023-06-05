import { Game } from './game.types'
import { Player } from './player.types'

export enum TeamSide {
  Blue = 'blueTeam',
  Red = 'redTeam',
}

export interface Team {
  id: string
  side: TeamSide
  name: string
  peoplePlayer: Player
  industryPlayer: Player
  governmentPlayer: Player
  energyPlayer: Player
  intelligencePlayer: Player
  game: Game
  isEventCardRead: boolean
}
