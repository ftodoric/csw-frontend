import { primaryColor, primaryHoverColor } from '@colors'
import styled from 'styled-components'

export const LobbyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  width: 100%;
  height: 50px;
  background-color: ${primaryColor};
  color: white;
  padding: 0 20px;
  box-sizing: border-box;
`

export const NavbarLeft = styled.div`
  font-style: italic;
`

export const NavbarRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLinkContainer = styled.div`
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }
`

export const CreateWrapper = styled.div`
  background-color: ${primaryColor};
  color: white;
  padding: 10px 20px;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    background-color: ${primaryHoverColor};
  }
`
