import { SET_PLAYER, REMOVE_PLAYER, SET_GAME_ACTION, RESET_GAME_ACTION } from './action.types'
import { GameActionState } from './GameActionContext'

export const reducer = (state: GameActionState, action: { type: string; payload: any }): GameActionState => {
  switch (action.type) {
    case SET_PLAYER:
      return { ...state, selectedPlayer: action.payload }

    case REMOVE_PLAYER:
      return { ...state, selectedPlayer: null }

    case SET_GAME_ACTION:
      return {
        ...state,
        madeActions: {
          ...state.madeActions,
          [action.payload.entityPlayer.id]: {
            entityPlayer: action.payload.entityPlayer,
            gameAction: action.payload.gameAction,
            gameActionPayload: action.payload.gameActionPayload,
          },
        },
      }

    case RESET_GAME_ACTION:
      return { selectedPlayer: null, madeActions: {} }

    default:
      return state
  }
}
