import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useActivateAsset } from '@hooks'
import { useGameContext } from '@modules/Game/context/GameContext'
import { entityNames } from '@modules/Game/utils'
import { Asset, AssetName, PlayerType, TeamSide } from '@types'

import { ActivateAssetFormInputs, activateAssetFormSchema } from './activateAsset-form.types'
import * as S from './styles'

interface TeamAssetProps {
  asset: Asset
  teamSide: TeamSide
}

export const TeamAsset = ({ asset, teamSide }: TeamAssetProps) => {
  const { game } = useGameContext()
  const { id: gameId, activeSide } = game!

  const activateAsset = useActivateAsset(gameId, asset.id)

  const { register, handleSubmit } = useForm<ActivateAssetFormInputs>({
    resolver: zodResolver(activateAssetFormSchema),
  })

  const onSubmit = (data: ActivateAssetFormInputs) => {
    activateAsset.mutate({ teamSide, ...data })
  }

  return (
    <S.AssetContainer>
      <S.Header>
        <S.Name>{asset.name}</S.Name>
        <S.Type type={asset.type}>{asset.type}</S.Type>
      </S.Header>

      <S.Effect>{asset.effectDescription}</S.Effect>

      <S.Rule />

      <S.ActivateAssetForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          {asset.name === AssetName.AttackVector && (
            <select {...register('attackVectorTarget')}>
              {teamSide === TeamSide.Blue ? (
                <>
                  <option value={PlayerType.Government}>{entityNames.redTeam.governmentPlayer}</option>
                  <option value={PlayerType.Energy}>{entityNames.redTeam.energyPlayer}</option>
                </>
              ) : (
                <option value={PlayerType.Energy}>{entityNames.blueTeam.energyPlayer}</option>
              )}
            </select>
          )}
        </div>

        <S.BidSubmit type="submit" value="Activate" disabled={activeSide !== teamSide} />
      </S.ActivateAssetForm>
    </S.AssetContainer>
  )
}
