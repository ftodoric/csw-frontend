import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { usePostAction } from '@hooks'
import { MAX_AMOUNT_OF_RESOURCE_FOR_ATTACK } from '@modules/Game/config'
import { removePlayer, setGameAction, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'
import { GameAction } from '@types'

import { AttackFormInputs, attackFormSchema } from './attack-form.types'
import * as S from './styles'
import { GameActionModal } from '../GameActionModal'

interface DistributeDialogProps {
  onClose: () => void
}

export const AttackDialog = ({ onClose }: DistributeDialogProps) => {
  const { state, dispatch } = useGameActionContext()

  const { selectedPlayer } = state

  const { game } = useGameContext()

  const makeAction = usePostAction()

  const actionModalRef = useRef<any>(null)

  const { register, handleSubmit } = useForm<AttackFormInputs>({ resolver: zodResolver(attackFormSchema) })

  const onSubmit = async (data: AttackFormInputs) => {
    if (selectedPlayer) {
      makeAction.mutate({ actionType: GameAction.ATTACK, playerId: selectedPlayer.id })
      dispatch(setGameAction(selectedPlayer, GameAction.ATTACK, { ...data }))
      dispatch(removePlayer())
    }
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
          <label htmlFor="resourceAmount">
            <span style={{ color: 'rgb(143, 75, 70)' }}>Attack</span> with amount of
          </label>
          <S.Field>
            <input
              type="number"
              min={1}
              max={Math.min(selectedPlayer.resource, MAX_AMOUNT_OF_RESOURCE_FOR_ATTACK)}
              {...register('resourceAmount', { valueAsNumber: true })}
              style={{ border: '1px solid rgb(118, 118, 118)', padding: '2px 4px', borderRadius: 5 }}
            />
            <span style={{ marginLeft: 10, color: 'rgb(135, 119, 37)' }}>resource</span>
          </S.Field>
        </S.InputsContainer>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <S.SendButton type="submit" value="Schedule attack" />
        </div>
      </S.FormContainer>
    </GameActionModal>
  )
}
