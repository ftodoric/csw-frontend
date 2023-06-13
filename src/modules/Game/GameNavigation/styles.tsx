import styled from 'styled-components'

import { GameOutcome } from '@types'

export const NavigationContainer = styled.div`
  height: 100px;
  box-shadow: 0 0 10px #c7c7c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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

  > div + button {
    margin-left: 20px;
  }

  > span#navigation-info-text {
    color: #393939;
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
  position: relative;

  :hover {
    cursor: pointer;
    height: 75px;
    opacity: 0.9;
  }

  :disabled {
    opacity: 0.4;
  }

  :focus-visible {
    outline: none;
  }
`

export const ActiveSideBanner = styled.div`
  position: absolute;
  width: 300px;
  height: 40px;
  top: -40px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  clip-path: polygon(0 100%, 100% 100%, 85% 10%, 80% 0, 20% 0, 15% 10%);
  font-size: 20px;
  font-family: Nunito;
  font-weight: bold;
  font-style: italic;
  color: #444444;
`

export const WinnerTextWrapper = styled.div<{ outcome: GameOutcome }>`
  ${(p) => p.outcome === GameOutcome.BlueVictory && 'color: #2e84c5'};
  ${(p) => p.outcome === GameOutcome.RedVictory && 'color: firebrick'};
  ${(p) => p.outcome === GameOutcome.Tie && 'color: #727272'};
`

export const FinishTurnButton = styled.div`
  position: absolute;
  background-color: #53a0a4;
  width: 150px;
  height: 50px;
  top: -70px;
  right: 40px;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px #777;
  text-transform: capitalize;
  transition: top 0.15s;

  :hover {
    cursor: pointer;
    background-color: #5daeb2;
    top: -75px;
  }
`
