import { useEffect } from 'react'

import { IconClose } from '@components/Icons'
import { Loader } from '@components/Loader'
import { removePlayer, setGameAction, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { GameAction } from '@types'

import { BlackMarketAsset } from './BlackMarketAsset'
import * as S from './styles'
import { useBlackMarket } from './useBlackMarket'

interface BlackMarketProps {
  onClose: () => void
}

export const BlackMarket = ({ onClose }: BlackMarketProps) => {
  const { game } = useGameContext()
  const { id: gameId } = game!

  const { data, isLoading, isError } = useBlackMarket(gameId)

  const { state, dispatch } = useGameActionContext()
  const { selectedPlayer } = state

  const handleGameAction = () => {
    if (selectedPlayer) {
      dispatch(setGameAction(selectedPlayer, GameAction.ACCESS_BLACK_MARKET, {}))
      dispatch(removePlayer())
    }
    onClose()
  }

  // Detect ESC keypress
  useEffect(() => {
    function handleEscape(event: any) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  if (isLoading) {
    return (
      <S.BlackMarketModal>
        <Loader />

        <S.CloseButton onClick={onClose}>
          <IconClose width="30px" height="30px" fill="firebrick" />
        </S.CloseButton>
      </S.BlackMarketModal>
    )
  }

  if (isError || !data) return null

  return (
    <S.BlackMarketModal>
      <S.MarketTitle>Black Market</S.MarketTitle>

      <S.Rule />

      <S.MarketList>
        {data.length !== 0 ? (
          data.map((asset) => {
            return <BlackMarketAsset key={asset.id} asset={asset} />
          })
        ) : (
          <S.EmptyState>There are currently no assets on the market.</S.EmptyState>
        )}
      </S.MarketList>

      <S.ConcludeBidding onClick={handleGameAction}>Conclude bidding</S.ConcludeBidding>

      <S.CloseButton onClick={onClose}>
        <IconClose width="30px" height="30px" fill="firebrick" />
      </S.CloseButton>
    </S.BlackMarketModal>
  )
}
