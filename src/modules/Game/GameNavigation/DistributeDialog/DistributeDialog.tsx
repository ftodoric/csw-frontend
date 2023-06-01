import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useMakeGameAction } from '@hooks'
import { removePlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { entityNames } from '@modules/Game/utils'
import { GameAction } from '@types'

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
  const { id: gameId } = game!

  const makeGameAction = useMakeGameAction(gameId)

  const actionModalRef = useRef<any>(null)

  const { register, handleSubmit } = useForm<DistributeFormInputs>({ resolver: zodResolver(distributeFormSchema) })

  const onSubmit = (data: DistributeFormInputs) => {
    makeGameAction.mutate({ actionType: GameAction.DISTRIBUTE, payload: { entityPlayer: selectedPlayer, ...data } })
    dispatch(removePlayer())
    onClose()
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

  return (
    <GameActionModal onClose={onClose}>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.InputsContainer>
          <label htmlFor="targetPlayerId">
            <span style={{ color: 'rgb(135, 119, 37)' }}>Distribute</span> to
          </label>
          <S.Field>
            <select {...register('targetPlayerId')}>
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
              max={Math.min(selectedPlayer.resource, 5)}
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
