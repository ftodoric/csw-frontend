import { useEffect } from 'react'

import { IconClose } from '@components/Icons'

import * as S from './styles'

interface HelpDialogProps {
  onClose: () => void
}

export const HelpDialog = ({ onClose }: HelpDialogProps) => {
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

  return (
    <S.HelpDialogModal>
      <S.Title>Rules of the game</S.Title>

      <hr style={{ margin: '8px 0', width: '100%' }} />

      <S.Body>
        <S.Header>How to win the game?</S.Header>
        <S.Description>
          Earn more <span id="victory-points">Victory Points</span> than the opposing team.
        </S.Description>

        <S.Header>How the game is played?</S.Header>
        <S.Description>
          <S.Paragraph>
            Each Entity has two sets of counters it must manage: <span id="resource">Resource</span> (representing
            wealth) and <span id="vitality">Vitality</span> (representing well-being).
          </S.Paragraph>

          <S.Paragraph>The game lasts 12 turns: January - December 2020.</S.Paragraph>

          <S.Paragraph>
            A turn consists of one team performing Actions with all their Entities, after which the other team performs
            Actions with all their Entities.
          </S.Paragraph>

          <S.Paragraph>Each turn, each Entity may perform one of five courses of Action:</S.Paragraph>

          <S.UnorderedList>
            <S.ListItem>
              Distribute - transfer <span id="resource">Resource</span> to any single connected Entity
            </S.ListItem>

            <S.ListItem>
              Revitalise - spend <span id="resource">Resource</span> to gain <span id="vitality">Vitality</span>
            </S.ListItem>

            <S.ListItem>
              Attack - spend <span id="resource">Resource</span> to attack along an attack vector (note: Teams may not
              attack in January)
            </S.ListItem>

            <S.ListItem>(GCHQ / SCS ONLY) Access Black Market - bid on black market goods</S.ListItem>

            <S.ListItem>Abstain - do nothing this turn</S.ListItem>
          </S.UnorderedList>
        </S.Description>
      </S.Body>

      <S.CloseButton onClick={onClose}>
        <IconClose width="30px" height="30px" fill="firebrick" />
      </S.CloseButton>
    </S.HelpDialogModal>
  )
}
