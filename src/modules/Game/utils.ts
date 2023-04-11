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
