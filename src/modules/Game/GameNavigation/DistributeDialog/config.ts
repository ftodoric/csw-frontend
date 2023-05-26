import { PlayerType, TeamSide } from '@types'

type DistributeNetworkMap = Record<TeamSide, Record<PlayerType, PlayerType[]>>

export const distributeNetworkMap: DistributeNetworkMap = {
  [TeamSide.Blue]: {
    [PlayerType.People]: [PlayerType.Industry, PlayerType.Government, PlayerType.Energy],

    [PlayerType.Industry]: [PlayerType.Government, PlayerType.Intelligence],

    [PlayerType.Government]: [PlayerType.People, PlayerType.Industry, PlayerType.Energy, PlayerType.Intelligence],

    [PlayerType.Energy]: [PlayerType.People, PlayerType.Government],

    [PlayerType.Intelligence]: [PlayerType.Government],
  },
  [TeamSide.Red]: {
    [PlayerType.People]: [],

    [PlayerType.Industry]: [PlayerType.Government],

    [PlayerType.Government]: [PlayerType.People, PlayerType.Industry, PlayerType.Energy, PlayerType.Intelligence],

    [PlayerType.Energy]: [PlayerType.Government],

    [PlayerType.Intelligence]: [PlayerType.Industry, PlayerType.Government],
  },
}
