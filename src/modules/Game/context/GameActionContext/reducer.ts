import { SET_PLAYER, REMOVE_PLAYER } from './action.types'
import { GameActionState } from './GameActionContext'

export const reducer = (state: GameActionState, action: { type: string; payload: any }): GameActionState => {
  switch (action.type) {
    case SET_PLAYER:
      return { ...state, selectedPlayer: action.payload }

    case REMOVE_PLAYER:
      return { ...state, selectedPlayer: null }

    default:
      return state
  }
}
