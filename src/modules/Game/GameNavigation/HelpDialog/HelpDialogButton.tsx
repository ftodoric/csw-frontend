import styled from 'styled-components'

import { IconHelp } from '@components/Icons'

interface HelpDialogButtonProps {
  onClose: () => void
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(48, 141, 193, 0.2);
  padding: 10px 15px 10px 10px;
  border-radius: 100px;
  width: 25px;
  overflow: hidden;
  transition: width 0.2s;

  :hover {
    cursor: pointer;
    width: 80px;
  }
`

const TextContainer = styled.div`
  margin-left: 10px;
  color: #143b4e;
`

export const HelpDialogButton = ({ onClose }: HelpDialogButtonProps) => {
  return (
    <ButtonContainer onClick={onClose}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconHelp width="30px" height="30px" fill="#143b4e" />
      </div>

      <TextContainer>Help</TextContainer>
    </ButtonContainer>
  )
}
