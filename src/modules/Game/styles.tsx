import styled from 'styled-components'

import { primaryColor, secondaryColor, secondaryHoverColor } from '@colors'
import { GameOutcome } from '@types'

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
  margin-right: 10px;
  height: 20;
  display: flex;
  align-items: center;
`

export const UserNavHoverWrapper = styled.div`
  border-radius: 100px;
  padding: 2px 2px 0;
  margin-left: 10px;

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

export const WinnerBanner = styled.div<{ outcome: GameOutcome }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.4);
  z-index: 100;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    justify-content: center;

    ${(p) => p.outcome === GameOutcome.BlueWins && 'background-color: #acc7db'};
    ${(p) => p.outcome === GameOutcome.RedWins && 'background-color: #ca9797'};
    ${(p) => p.outcome === GameOutcome.Tie && 'background-color: #d5d5d5'};

    ${(p) => p.outcome === GameOutcome.BlueWins && 'color: #2e84c5'};
    ${(p) => p.outcome === GameOutcome.RedWins && 'color: firebrick'};
    ${(p) => p.outcome === GameOutcome.Tie && 'color: #727272'};

    width: 100%;
    height: 200px;
    margin-top: 200px;
    align-items: center;
    font-size: 40px;
    font-style: italic;
    font-weight: bold;
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

  @keyframes slideInFromFarLeft {
    0% {
      transform: translateX(-1000%);
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
    animation: 0.2s ease-out 0s 1 slideInFromFarLeft;

    :hover {
      text-decoration: underline;
      cursor: pointer;

      ${(p) => p.outcome === GameOutcome.BlueWins && 'color: #2e84c5'};
      ${(p) => p.outcome === GameOutcome.RedWins && 'color: firebrick'};
    }
  }
`
