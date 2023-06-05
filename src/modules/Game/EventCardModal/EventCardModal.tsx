import { useState } from 'react'

import { IconClose } from '@components/Icons'
import { useReadEventCard } from '@hooks'
import { EventCardName, TeamSide } from '@types'

import * as S from './styles'
import { eventCardAssetMapping } from './utils'

interface EventCardModalProps {
  drawnCard: EventCardName
  gameId: string
  teamSide: TeamSide
}

export const EventCardModal = ({ drawnCard, gameId, teamSide }: EventCardModalProps) => {
  const [isClosed, setClosed] = useState(false)

  const readEventCard = useReadEventCard(gameId, teamSide)

  return (
    <S.ModalContainer style={{ display: isClosed ? 'none' : 'flex' }}>
      <S.CenterContainer>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <S.EventCard src={`/images/eventCards/${eventCardAssetMapping[drawnCard]}.png`} />
            </div>

            <div className="flip-card-back" />

            <S.CloseButton
              className="closeButton"
              onClick={() => {
                setClosed(true)
                readEventCard.mutate()
              }}
            >
              <IconClose width="30px" height="30px" />
            </S.CloseButton>
          </div>
        </div>
      </S.CenterContainer>
    </S.ModalContainer>
  )
}
