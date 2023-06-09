import { useEffect } from 'react'

import { IconClose } from '@components/Icons'

import * as S from './styles'

interface ObjectivesModalProps {
  onClose: () => void
  entityName: string
}

export const ObjectivesModal = ({ onClose, entityName }: ObjectivesModalProps) => {
  console.log('%clog | description\n', 'color: #0e8dbf; margin-bottom: 5px;', entityName)

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
    <S.ModalContainer>
      <S.ModalHeader>
        <S.Title>Objectives | {entityName}</S.Title>

        <S.CloseButton onClick={onClose}>
          <IconClose width="30px" height="30px" fill="firebrick" />
        </S.CloseButton>
      </S.ModalHeader>

      <hr style={{ margin: '8px 0', width: '100%' }} />

      {entityName === 'UK Government' && (
        <S.Body>
          <S.Header>Election time</S.Header>
          <S.Description>
            <S.Paragraph>Buy popular support ahead of 2021 elections by making sure the people prosper.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+1 Victory Point</span> for every month <span id="uk">Electorate</span> ends
              with <span id="resource">4 or more Resource</span>
            </S.Paragraph>
          </S.Description>

          <S.Header>Aggressive outlook</S.Header>
          <S.Description>
            <S.Paragraph>Drive home a strong anti-Russia rhetoric.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+5 Victory Points</span> if <span id="russia">Russia Government</span> ends the
              game with less <span id="vitality">Vitality</span> than it started.
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'Electorate' && (
        <S.Body>
          <S.Header>Resist the drain</S.Header>
          <S.Description>
            <S.Paragraph>Avoid having your wealth taken away from you.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">-1 Victory Point</span> every time <span id="resource">Resource</span> is
              transferred away from <span id="uk">Electorate</span>.
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'UK PLC' && (
        <S.Body>
          <S.Header>Weather the Brexit storm</S.Header>
          <S.Description>
            <S.Paragraph>Build a cash flow buffer to deal with Brexit uncertainties.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+2 Victory Points</span> for <span id="resource">3 or more Resource</span> at
              the end of April
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+3 Victory Points</span> for <span id="resource">6 or more Resource</span> at
              the end of August
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+4 Victory Points</span> for <span id="resource">9 or more Resource</span> at
              the end of December
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>(Cumulative)</S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'GCHQ' && (
        <S.Body>
          <S.Header>Recruitment Drive</S.Header>
          <S.Description>
            <S.Paragraph>
              Swell your staff numbers by increasing <span id="vitality">Vitality</span> every quarter (end of March,
              June, September and December).
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+1 Victory Points</span> for single quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+3 Victory Points</span> for two consecutive quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+5 Victory Points</span> for three consecutive quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+7 Victory Points</span> for the entire year
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>(Not cumulative)</S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'UK Energy' && (
        <S.Body>
          <S.Header>Grow capacity</S.Header>
          <S.Description>
            <S.Paragraph>Increase the energy output of your power plants.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+2 Victory Points</span> if you have{' '}
              <span id="vitality">6 or more Vitality</span> at the end of June
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+3 Victory Points</span> if you have{' '}
              <span id="vitality">9 or more Vitality</span> at the end of December
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'Russian Government' && (
        <S.Body>
          <S.Header>Some animals are more equal than others</S.Header>
          <S.Description>
            <S.Paragraph>Keep a slice of your income for yourself.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+1 Victory Point</span> every month you end with{' '}
              <span id="resource">3 or more Resource</span>
            </S.Paragraph>
          </S.Description>

          <S.Header>Control the Trolls</S.Header>
          <S.Description>
            <S.Paragraph>{"Don't let the trolls get overconfident."}</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">-1 Victory Point</span> every time <span id="russia">Online Trolls</span> launch
              a <span id="resource">3 or 4 Resource</span> attack
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">-2 Victory Points</span> every time <span id="russia">Online Trolls</span>{' '}
              launch a <span id="resource">5 or 6 Resource</span> attack
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'Online Trolls' && (
        <S.Body>
          <S.Header>Success breeds confidence</S.Header>
          <S.Description>
            <S.Paragraph>Small-scale harassment is beneath your capabilities.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+4 Victory Points</span> every time you launch an attack with{' '}
              <span id="resource">3 or more Resource</span> and the Ransomware asset.
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'Energetic Bear' && (
        <S.Body>
          <S.Header>{"Those who can't, steal"}</S.Header>
          <S.Description>
            <S.Paragraph>Grow your business by whatever means possible.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+1 Victory Point</span> for having more <span id="vitality">Vitality</span> at
              the end of April than the start of the game
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+3 Victory Points</span> for having more <span id="vitality">Vitality</span> at
              the end of August than April
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+5 Victory Points</span> for having more <span id="vitality">Vitality</span> at
              the end of December than August
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>(Cumulative)</S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'SCS' && (
        <S.Body>
          <S.Header>Win the arms race</S.Header>
          <S.Description>
            <S.Paragraph>Have a better cyber arsenal than the UK.</S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+2 Victory Points</span> every month you end with more Attack assets than the{' '}
              <span id="uk">{"UK's"}</span> defence assets
            </S.Paragraph>
          </S.Description>
        </S.Body>
      )}

      {entityName === 'Rosenergoatom' && (
        <S.Body>
          <S.Header>Grow capacity</S.Header>
          <S.Description>
            <S.Paragraph>
              {'Increase the energy output of your power plants by growing'} <span id="vitality">Vitality</span>{' '}
              {'every quarter (end of March, June, September and December)'}
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+1 Victory Points</span> for single quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+3 Victory Points</span> for two consecutive quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+5 Victory Points</span> for three consecutive quarters
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>
              <span id="victory-points">+7 Victory Points</span> for the entire year
            </S.Paragraph>
            <S.Paragraph style={{ marginLeft: 20 }}>(Not cumulative)</S.Paragraph>
          </S.Description>
        </S.Body>
      )}
    </S.ModalContainer>
  )
}
