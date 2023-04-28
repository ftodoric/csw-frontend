import styled from 'styled-components'

import { primaryColor, secondaryColor, secondaryHoverColor } from '@colors'

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

export const UserNavHoverWrapper = styled.div`
  border-radius: 100px;
  padding: 1px 2px;

  :hover {
    background-color: ${secondaryHoverColor};
    cursor: pointer;
  }
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
  box-sizing: border-box;
`

export const Battleground = styled.div`
  height: calc(100vh - 150px);
  position: relative;
`

export const WinnerBanner = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.4);
  z-index: 100;
  backdrop-filter: blur(5px);

  > div {
    display: flex;
    justify-content: center;
    background-color: #d5d5d5;
    width: 100%;
    height: 200px;
    margin-top: 200px;
    align-items: center;
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
    color: #727272;
    box-shadow: 0 0 100px grey;
    animation: 0.2s ease-out 0s 1 slideInFromLeft;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  > span {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
    animation: 0.2s ease-out 0s 1 slideInFromLeft;

    :hover {
      color: firebrick;
      text-decoration: underline;
    }
  }
`
