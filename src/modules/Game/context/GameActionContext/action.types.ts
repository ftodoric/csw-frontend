import { GameAction, Player } from '@types'

/**
 * Sets selected entity. Then, certain game actions can be performed with selected entity.
 */
export const SET_PLAYER = 'SET_PLAYER'

export const setPlayer = (player: Player) => {
  return { type: SET_PLAYER, payload: player }
}

/**
 * Removes an entity from state. Hides game actions.
 */
export const REMOVE_PLAYER = 'REMOVE_PLAYER'

export const removePlayer = () => {
  return { type: REMOVE_PLAYER, payload: null }
}

export const SET_GAME_ACTION = 'SET_GAME_ACTION'

export const setGameAction = (entityPlayer: Player, gameAction: GameAction, gameActionPayload?: any) => {
  return {
    type: SET_GAME_ACTION,
    payload: {
      // This is required data for the POST request to API game route
      entityPlayer,
      gameAction,
      gameActionPayload,
    },
  }
}
