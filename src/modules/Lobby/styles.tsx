import styled from 'styled-components'

import { primaryColor, primaryHoverColor, secondaryColor } from '@colors'

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
  color: ${secondaryColor};
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
  margin-left: 10px;
  border-radius: 100px;
  padding: 2px 3px;
  display: flex;
  align-items: center;

  &#logout {
    padding: 3px 2px 3px 5px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export const CreateWrapper = styled.div`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 10px 20px;
  border-radius: 20px;

  :hover {
    cursor: pointer;
    background-color: ${primaryHoverColor};
  }
`
