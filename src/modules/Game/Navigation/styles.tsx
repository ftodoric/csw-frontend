import styled from 'styled-components'

export const NavigationContainer = styled.div`
  height: 100px;
  box-shadow: 0 0 10px #c7c7c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationActions = styled.div`
  display: flex;
  width: 450px;
  justify-content: center;
  align-items: center;
  height: 100%;

  > button + button {
    margin-left: 20px;
  }
`

export const ActionButtonWrapper = styled.button<{ bgColor: string }>`
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${(p) => p.bgColor};
  border-radius: 10px;
  transition: height 0.2s;
  border: none;

  :hover {
    cursor: pointer;
    height: 75px;
    opacity: 0.9;
  }

  :disabled {
    opacity: 0.4;
  }
`
