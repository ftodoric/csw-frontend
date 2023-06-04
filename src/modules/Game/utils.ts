import { Game, GameOutcome, GamePeriod, PlayerType, TeamSide, User } from '@types'

/**
 * Determines users's team. If the user plays on both sides, the blue team is set by default.
 * @param user
 * @param game
 * @returns {TeamSide}
 */
export const determineUserSide = (userId: string, game: Game) => {
  const blueTeamPlayers = Object.keys(game.blueTeam).filter((key) => key.toLowerCase().includes('player'))

  const isOnBlueTeam = blueTeamPlayers.some((player) => (game.blueTeam as any)[player].user.id === userId)

  return isOnBlueTeam ? TeamSide.Blue : TeamSide.Red
}

/**
 * Format timers sceonds. Padd with zeroes.
 * @param seconds
 * @returns {string}
 */
export const formatTimer = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = seconds - m * 60

  const mLength = m.toString().length
  const sLength = s.toString().length

  return `${'0'.repeat(2 - mLength)}${m}:${'0'.repeat(2 - sLength)}${s}`
}

export const gamePeriodMap = {
  [GamePeriod.January]: 'January',
  [GamePeriod.February]: 'February',
  [GamePeriod.March]: 'March',
  [GamePeriod.April]: 'April',
  [GamePeriod.May]: 'May',
  [GamePeriod.June]: 'June',
  [GamePeriod.July]: 'July',
  [GamePeriod.August]: 'August',
  [GamePeriod.September]: 'September',
  [GamePeriod.October]: 'October',
  [GamePeriod.November]: 'November',
  [GamePeriod.December]: 'December',
}

export const getWinnerText = (outcome: GameOutcome, showcase?: boolean): string => {
  switch (outcome) {
    case GameOutcome.BlueVictory:
      return 'Blue Team Wins'
    case GameOutcome.RedVictory:
      return 'Red Team Wins'
    case GameOutcome.Tie:
      return showcase ? `It's a TIE` : 'Tie'
  }
}

export const entityNames = {
  [TeamSide.Blue]: {
    [PlayerType.People]: 'Electorate',
    [PlayerType.Industry]: 'UK PLC',
    [PlayerType.Government]: 'UK Government',
    [PlayerType.Energy]: 'UK Energy',
    [PlayerType.Intelligence]: 'GCHQ',
  },
  [TeamSide.Red]: {
    [PlayerType.People]: 'Online Trolls',
    [PlayerType.Industry]: 'Energetic Bear',
    [PlayerType.Government]: 'Russian Government',
    [PlayerType.Energy]: 'Rosenergoatom',
    [PlayerType.Intelligence]: 'SCS',
  },
}
