import { Player } from '@types'

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

export const allActions = [SET_PLAYER, REMOVE_PLAYER]
