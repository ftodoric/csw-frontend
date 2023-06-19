import { removePlayer, useGameActionContext } from '@modules/Game/context/GameActionContext'
import { useGameContext } from '@modules/Game/context/GameContext'

import * as S from './styles'
import { usePayRansomwareAttacker } from './usePayRansomwareAttacker'

interface RansomwareDialogProps {
  attackerId: string
  victimId: string
  hasVictimEnoughResource: boolean
}

export const RansomwareDialog = ({ attackerId, victimId, hasVictimEnoughResource }: RansomwareDialogProps) => {
  const { game } = useGameContext()
  const { id: gameId } = game!

  const payRansomwareAttacker = usePayRansomwareAttacker(gameId, attackerId, victimId)

  const { dispatch } = useGameActionContext()

  const onYesSubmit = () => {
    payRansomwareAttacker.mutate('yes')
    dispatch(removePlayer())
  }

  const onNoSubmit = () => {
    payRansomwareAttacker.mutate('no')
    dispatch(removePlayer())
  }

  return (
    <S.RansomwareDialogContainer>
      {hasVictimEnoughResource ? (
        <span>
          {'You have been attacked with a ransomware. Pay the attacker '}
          <span style={{ color: 'rgb(135, 119, 37)' }}>2 resource</span> {'to avoid paralysis for 2 turns?'}
        </span>
      ) : (
        <span>
          {"You have been attacked with a ransomware. You don't have enough "}
          <span style={{ color: 'rgb(135, 119, 37)' }}>resource (2)</span>
          {' to pay the attacker. You are paralyzed for 2 turns.'}
        </span>
      )}

      <S.RansomwareForm>
        {hasVictimEnoughResource ? (
          <>
            <S.SubmitYes type="submit" value="Yes" onClick={onYesSubmit} />
            <S.SubmitNo type="submit" value="No" onClick={onNoSubmit} />
          </>
        ) : (
          <S.SubmitOk type="submit" value="OK" onClick={onNoSubmit} />
        )}
      </S.RansomwareForm>
    </S.RansomwareDialogContainer>
  )
}
