import styled from 'styled-components'

import { IconInventory } from '@components/Icons'

interface InventoryButtonProps {
  onClose: () => void
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0d4af;
  padding: 10px 15px 10px 10px;
  border-radius: 100px;
  width: 25px;
  overflow: hidden;
  transition: width 0.2s;

  :hover {
    cursor: pointer;
    width: 90px;
  }
`

const TextContainer = styled.div`
  margin-left: 10px;
  color: #605636;
`

export const InventoryButton = ({ onClose }: InventoryButtonProps) => {
  return (
    <ButtonContainer onClick={onClose}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconInventory width="30px" height="30px" fill="#605636" />
      </div>

      <TextContainer>Assets</TextContainer>
    </ButtonContainer>
  )
}
