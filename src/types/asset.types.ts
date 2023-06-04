export enum AssetType {
  Attack = 'attack',
  Defence = 'defence',
}

export enum AssetStatus {
  NotSuppliedToMarket = 'notSuppliedToMarket',
  Bidding = 'bidding',
  Secured = 'secured',
  Activated = 'activated',
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

export enum AssetName {
  AttackVector = 'Attack Vector',
  Education = 'Education',
  RecoveryManagement = 'Recovery Management',
  SoftwareUpdate = 'Software Update',
  BargainingChip = 'Bargaining Chip',
  NetworkPolicy = 'Network Policy',
  Stuxnet20 = 'Stuxnet 2.0',
  Ransomware = 'Ransomware',
  CyberInvestmentProgramme = 'Cyber Investment Programme',
}
