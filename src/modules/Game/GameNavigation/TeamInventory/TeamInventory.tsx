import { useEffect } from 'react'

import { IconClose } from '@components/Icons'
import { Loader } from '@components/Loader'
import { useGameContext } from '@modules/Game/context/GameContext'
import { TeamSide } from '@types'

import * as S from './styles'
import { TeamAsset } from './TeamAsset'
import { useTeamAssets } from './useTeamAssets'

interface TeamInventoryProps {
  onClose: () => void
  teamSide: TeamSide
}

export const TeamInventory = ({ onClose, teamSide }: TeamInventoryProps) => {
  const { game } = useGameContext()
  const { id: gameId } = game!

  const { data, isLoading, isError } = useTeamAssets(gameId, teamSide)

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
      <S.InventoryModal>
        <Loader />

        <S.CloseButton onClick={onClose}>
          <IconClose width="30px" height="30px" fill="firebrick" />
        </S.CloseButton>
      </S.InventoryModal>
    )
  }

  if (isError || !data) return null

  return (
    <S.InventoryModal>
      <S.MarketTitle>Inventory</S.MarketTitle>

      <S.Rule />

      <S.MarketList>
        {data.length !== 0 ? (
          data.map((asset) => {
            return <TeamAsset key={asset.id} asset={asset} />
          })
        ) : (
          <S.EmptyState>Your team does not posses any assets.</S.EmptyState>
        )}
      </S.MarketList>

      <S.CloseButton onClick={onClose}>
        <IconClose width="30px" height="30px" fill="firebrick" />
      </S.CloseButton>
    </S.InventoryModal>
  )
}
