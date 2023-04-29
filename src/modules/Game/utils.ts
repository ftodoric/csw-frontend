import { Game, GameOutcome, GamePeriod, TeamSide, User } from '@types'

/**
 * Determines player's team. If the player plays on both sides, the blue team is set by default.
 * @param user
 * @param game
 * @returns {TeamSide}
 */
export const determineUserSide = (user: User, game: Game) => {
  return game.blueTeam.peoplePlayer.user.id === user.id ||
    game.blueTeam.industryPlayer.user.id === user.id ||
    game.blueTeam.governmentPlayer.user.id === user.id ||
    game.blueTeam.energyPlayer.user.id === user.id ||
    game.blueTeam.intelligencePlayer.user.id === user.id
    ? TeamSide.Blue
    : TeamSide.Red
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

export const getWinnerText = (
  outcome: GameOutcome,
  showcase?: boolean
): string => {
  switch (outcome) {
    case GameOutcome.BlueWins:
      return 'Blue Team Wins'
    case GameOutcome.RedWins:
      return 'Red Team Wins'
    case GameOutcome.Tie:
      return showcase ? `It's a TIE` : 'TIE'
  }
}
