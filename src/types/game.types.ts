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
  BlueVictory,
  RedVictory,
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
  activeSide: TeamSide
  activePeriod: GamePeriod
  isRussianGovernmentAttacked: boolean
  isUkEnergyAttacked: boolean
  isRosenergoatomAttacked: boolean
  lastAttacker?: GameEntity
  lastAttackStrength?: number
}

export enum GameNavigationClick {
  DISTRIBUTE = 'distribute',
  REVITALISE = 'revitalise',
  ATTACK = 'attack',
  ACCESS_BLACK_MARKET = 'accessBlackMarket',
  ABSTAIN = 'abstain',
}

export enum GameAction {
  DISTRIBUTE = 'distribute',
  REVITALISE = 'revitalise',
  ATTACK = 'attack',
  ABSTAIN = 'abstain',
  ACCESS_BLACK_MARKET = 'accessBlackMarket',
}

export enum PlayerType {
  People = 'peoplePlayer',
  Industry = 'industryPlayer',
  Government = 'governmentPlayer',
  Energy = 'energyPlayer',
  Intelligence = 'intelligencePlayer',
}

export enum GameEntity {
  // Blue Team
  UKGovernment = 'ukGovernment',
  Electorate = 'electorate',
  UKPLC = 'ukPlc',
  UKEnergy = 'ukEnergy',
  GCHQ = 'gchq',

  // Red Team
  RussianGovernment = 'russianGovernment',
  OnlineTrolls = 'onlineTrolls',
  EnergeticBear = 'energeticBear',
  Rosenergoatom = 'rosenergoatom',
  SCS = 'scs',
}
