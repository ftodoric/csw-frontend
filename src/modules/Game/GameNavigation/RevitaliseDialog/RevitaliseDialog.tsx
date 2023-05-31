import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'

import { zodResolver } from '@hookform/resolvers/zod'

import { useMakeGameAction } from '@hooks'
import { MAX_AMOUNT_OF_REVITALISATION } from '@modules/Game/config'
import { removePlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { GameAction } from '@types'

import { revitalisationConversionRate } from './config'
import { RevitaliseFormInputs, revitaliseFormSchema } from './revitalise-form.types'
import * as S from './styles'
import { GameActionModal } from '../GameActionModal'

interface DistributeDialogProps {
  onClose: () => void
}

export const RevitaliseDialog = ({ onClose }: DistributeDialogProps) => {
  const queryClient = useQueryClient()
  const { state, dispatch } = useGameActionContext()

  const { selectedPlayer } = state

  const { game } = useGameContext()
  const { id: gameId } = game!

  const makeGameAction = useMakeGameAction(gameId)

  const actionModalRef = useRef<any>(null)

  const [vitalityAmount, setVitalityAmount] = useState(0)

  const { register, handleSubmit } = useForm<RevitaliseFormInputs>({
    resolver: zodResolver(revitaliseFormSchema),
  })

  const onSubmit = (data: RevitaliseFormInputs) => {
    makeGameAction.mutate({ actionType: GameAction.REVITALISE, payload: { entityPlayer: selectedPlayer, ...data } })
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
          <label htmlFor="revitalizationAmount">
            <span style={{ color: 'rgb(16, 88, 129)' }}>Revitalise</span> by
          </label>
          <S.Field>
            <input
              defaultValue={0}
              type="number"
              min={0}
              max={MAX_AMOUNT_OF_REVITALISATION}
              {...register('revitalizationAmount', {
                valueAsNumber: true,
              })}
              onChange={(e: any) => {
                setVitalityAmount(Number(e.target.value))
              }}
            />
            <span>vitality</span>
          </S.Field>

          <label style={{ marginTop: 15 }}>
            with the cost of
            <span
              style={{ color: 'rgb(135, 119, 37)', marginLeft: 4 }}
            >{`${revitalisationConversionRate[vitalityAmount]} resource`}</span>
          </label>
          <S.ErrorContainer>
            {revitalisationConversionRate[vitalityAmount] > selectedPlayer.resource && 'Not enough resources'}
          </S.ErrorContainer>
        </S.InputsContainer>

        <S.SendButton
          type="submit"
          value="Revitalise"
          disabled={vitalityAmount === 0 || revitalisationConversionRate[vitalityAmount] > selectedPlayer.resource}
        />
      </S.FormContainer>
    </GameActionModal>
  )
}
