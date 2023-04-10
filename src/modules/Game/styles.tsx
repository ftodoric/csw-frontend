import styled from 'styled-components'

import { primaryColor, secondaryColor } from '@colors'

export const Header = styled.div`
  background-color: ${primaryColor};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${secondaryColor};
`

export const UserNav = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Username = styled.div`
  border-right: solid 2px white;
  padding: 0 20px;
  margin-right: 20px;
  height: 20;
  display: flex;
  align-items: center;
`

export const Counter = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export const GamePeriod = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  font-style: italic;
`

export const Battleground = styled.div`
  height: calc(100vh - 150px);
  position: relative;
`

export const RedTeamBackground = styled.div``

export const BlueTeamBackground = styled.div``

export const Navigation = styled.div`
  height: 100px;
  box-shadow: 0 0 10px #c7c7c7;
`
