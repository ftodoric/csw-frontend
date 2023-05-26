import { PropsWithChildren, useEffect, useRef } from 'react'

import { IconClose } from '@components/Icons'

import * as S from './styles'

interface DistributeDialogProps {
  onClose: () => void
}

export const GameActionModal = ({ onClose, children }: PropsWithChildren<DistributeDialogProps>) => {
  const actionModalRef = useRef<any>(null)

  // Detect clicks outside of this modal
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

  return (
    <S.DialogContainer ref={actionModalRef}>
      {children}

      <S.CloseButton onClick={onClose}>
        <IconClose width="50px" height="50px" fill="firebrick" />
      </S.CloseButton>
    </S.DialogContainer>
  )
}
