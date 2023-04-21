import { Game, TeamSide, User } from '@types'

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
