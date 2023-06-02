import { Asset } from '@types'

import * as S from './styles'

interface TeamAssetProps {
  asset: Asset
}

export const TeamAsset = ({ asset }: TeamAssetProps) => {
  return (
    <S.AssetContainer>
      <S.Header>
        <S.Name>{asset.name}</S.Name>
        <S.Type>{asset.type}</S.Type>
      </S.Header>

      <S.Effect>{asset.effectDescription}</S.Effect>

      <S.Rule />

      <S.ActivateAssetForm>
        <div>
          <select>
            <option>GCHQ</option>
          </select>
        </div>

        <S.BidSubmit type="submit" value="Activate" />
      </S.ActivateAssetForm>
    </S.AssetContainer>
  )
}
