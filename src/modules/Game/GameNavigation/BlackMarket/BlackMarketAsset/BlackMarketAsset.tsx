import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useBid } from '@hooks/games/useBid'
import { useGameActionContext } from '@modules/Game/context/GameActionContext'
import { Asset, TeamSide } from '@types'

import { BidFormInputs, bidFormSchema } from './bid-form.types'
import * as S from './styles'

interface BlackMarketAssetProps {
  asset: Asset
}

export const BlackMarketAsset = ({ asset }: BlackMarketAssetProps) => {
  const { state } = useGameActionContext()
  const { selectedPlayer } = state

  const makeBid = useBid(asset.id)

  const playerBid = selectedPlayer?.side === TeamSide.Blue ? asset.blueTeamBid : asset.redTeamBid
  const opponentsBid = selectedPlayer?.side === TeamSide.Blue ? asset.redTeamBid : asset.blueTeamBid

  const { register, handleSubmit } = useForm<BidFormInputs>({ resolver: zodResolver(bidFormSchema) })

  const [bid, setBid] = useState(0)

  const onSubmit = (data: BidFormInputs) => {
    makeBid.mutate({ ...data, teamSide: selectedPlayer!.side, entityPlayer: selectedPlayer! })
  }

  if (!selectedPlayer) return null

  return (
    <S.AssetContainer>
      <S.Header>
        <S.Name>{asset.name}</S.Name>
        <S.Type>{asset.type}</S.Type>
      </S.Header>

      <S.Effect>{asset.effectDescription}</S.Effect>

      <S.MinimumBid>{`Minimum bid: ${asset.minimumBid}`}</S.MinimumBid>

      <S.TeamBids>
        <div>{`Opponent's bid: ${opponentsBid}`}</div>
        <div>{`Your bid: ${playerBid}`}</div>
      </S.TeamBids>

      <S.Rule />

      <S.BidForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <S.BidInput
            type="number"
            min={Math.max(asset.minimumBid, opponentsBid + 1)}
            {...register('bid', { valueAsNumber: true })}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBid(Number(e.target.value))
            }}
          />
          <span style={{ color: 'rgb(135, 119, 37)', marginLeft: 10 }}>resource</span>
        </div>

        <S.BidSubmit type="submit" value="Make a bid" disabled={bid > selectedPlayer.resource} />
      </S.BidForm>

      <S.Error>{bid > selectedPlayer.resource && 'Not enough resource'}</S.Error>
    </S.AssetContainer>
  )
}
