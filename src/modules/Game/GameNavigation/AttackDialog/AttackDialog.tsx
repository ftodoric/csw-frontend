import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { useMakeGameAction } from '@hooks'
import { MAX_AMOUNT_OF_RESOURCE_FOR_ATTACK } from '@modules/Game/config'
import { removePlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
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
  const { id: gameId } = game!

  const makeGameAction = useMakeGameAction(gameId)

  const actionModalRef = useRef<any>(null)

  const [diceRoll, setDiceRoll] = useState<number>(0)

  const { register, handleSubmit } = useForm<AttackFormInputs>({ resolver: zodResolver(attackFormSchema) })

  const onSubmit = async (data: AttackFormInputs) => {
    const min = 1
    const max = 7
    const result = Math.floor(Math.random() * (max - min) + min)
    setDiceRoll(result)

    setTimeout(() => {
      makeGameAction.mutate({
        actionType: GameAction.ATTACK,
        payload: { entityPlayer: selectedPlayer, ...data, diceRoll: result },
      })
      dispatch(removePlayer())
      onClose()
    }, 3000)
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
            />
            <span style={{ marginLeft: 10 }}>resource</span>
          </S.Field>
        </S.InputsContainer>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ height: '80px', width: '60px', marginTop: 10 }}>
            {diceRoll !== 0 && (
              <S.DiceRollContainer>
                <Image src={`/images/dice/${diceRoll}.png`} width={60} height={60} alt="diceRoll" />
              </S.DiceRollContainer>
            )}
          </div>

          <S.SendButton type="submit" value="Roll the dice and attack" disabled={diceRoll !== 0} />
        </div>
      </S.FormContainer>
    </GameActionModal>
  )
}
