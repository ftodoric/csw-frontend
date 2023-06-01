export enum AssetType {
  Attack = 'attack',
  Defence = 'defence',
}

export enum AssetStatus {
  NotSuppliedToMarket = 'notSuppliedToMarket',
  Bidding = 'bidding',
  Secured = 'secured',
}

export interface Asset {
  id: string
  name: string
  type: AssetType
  effectDescription: string
  minimumBid: number
  blueTeamBid: number
  redTeamBid: number
  status: AssetStatus
  gameId: string
}
