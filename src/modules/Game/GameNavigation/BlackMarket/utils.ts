import { AssetType } from '@types'

export const assetTypeMap = (type: AssetType) => {
  return type === AssetType.Attack ? 'Attack' : 'Defence'
}
