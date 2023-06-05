import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useMakeGameAction } from '@hooks'
import { removePlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { entityNames } from '@modules/Game/utils'
import { GameAction, Player } from '@types'

import { distributeNetworkMap } from './config'
import { DistributeFormInputs, distributeFormSchema } from './distribute-form.types'
import * as S from './styles'
import { GameActionModal } from '../GameActionModal'

interface DistributeDialogProps {
  onClose: () => void
}

export const DistributeDialog = ({ onClose }: DistributeDialogProps) => {
  const { state, dispatch } = useGameActionContext()

  const { selectedPlayer } = state

  const { game } = useGameContext()
  const { id: gameId, blueTeam, redTeam } = game!

  const makeGameAction = useMakeGameAction(gameId)

  const actionModalRef = useRef<any>(null)

  const { register, handleSubmit } = useForm<DistributeFormInputs>({ resolver: zodResolver(distributeFormSchema) })

  const [isTargetSplashImmune, setIsTargetSplashImmune] = useState(false)

  const onSubmit = (data: DistributeFormInputs) => {
    makeGameAction.mutate({ actionType: GameAction.DISTRIBUTE, payload: { entityPlayer: selectedPlayer, ...data } })
    dispatch(removePlayer())
    onClose()
  }

  const handleSelect = (e: any) => {
    const targetId = e.target.value

    // Find that target player
    Object.keys(blueTeam).forEach((key) => {
      const player = (blueTeam as any)[key] as Player
      if (player.id === targetId) {
        setIsTargetSplashImmune(player.isSplashImmune)
      }
    })
  }

  // Detect clicks outside of open modals
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (actionModalRef.current && !actionModalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [actionModalRef, onClose])

  if (!selectedPlayer) return null

  const isAnyoneSplashImmune = selectedPlayer.isSplashImmune || isTargetSplashImmune

  return (
    <GameActionModal onClose={onClose}>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.InputsContainer>
          <label htmlFor="targetPlayerId">
            <span style={{ color: 'rgb(135, 119, 37)' }}>Distribute</span> to
          </label>
          <S.Field>
            <select {...register('targetPlayerId')} onChange={handleSelect}>
              {distributeNetworkMap[selectedPlayer.side][selectedPlayer.type].map((player) => {
                return (
                  <option key={player} value={(game as any)[selectedPlayer.side][player].id}>
                    {entityNames[selectedPlayer.side][player]}
                  </option>
                )
              })}
            </select>
          </S.Field>

          <label htmlFor="resourceAmount" style={{ marginTop: 10 }}>
            an amount of
          </label>
          <S.Field>
            <input
              type="number"
              min={0}
              max={Math.min(selectedPlayer.resource, isAnyoneSplashImmune ? 2 : 5)}
              {...register('resourceAmount', { valueAsNumber: true })}
            />
            <span style={{ marginLeft: 10 }}>resource</span>
          </S.Field>
        </S.InputsContainer>

        <S.SendButton type="submit" value="Send" />
      </S.FormContainer>
    </GameActionModal>
  )
}
