import styled from 'styled-components'

import { resourceColor, victoryPointsColor, vitalityColor } from '@colors'
import { GameOutcome } from '@types'

export const NavigationContainer = styled.div`
  height: 100px;
  box-shadow: 0 0 10px #c7c7c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const MessageLogContainer = styled.div`
  width: 30vw;
  height: 120px;
  background-color: white;
  border-top-right-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  position: absolute;
  align-self: flex-end;
  box-sizing: border-box;
`
export const MessageLogTitle = styled.div`
  position: absolute;
  width: 70px;
  height: 30px;
  top: -30px;
  left: 0;
  display: flex;
  padding-left: 20px;
  align-items: center;
  background-color: #ddd;
  clip-path: polygon(0 100%, 100% 100%, 85% 10%, 80% 0, 0 0);
  font-size: 20px;
  font-family: Nunito;
  font-weight: bold;
  color: #444444;
`

export const Messages = styled.div`
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
`

export const DepthMarker = styled.div`
  background-color: white;
  width: calc(30vw - 15px - 10px);
  height: 5px;
  position: fixed;
  bottom: 0;
  left: 10px;
  box-shadow: -15px 0px 10px #666;
`

export const DepthMarkerLeftCorner = styled.div`
  width: 10px;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
`

export const RichFormatMessages = styled.div`
  > h1 {
    margin-bottom: 5px;
    font-size: 18px;

    &::before {
      content: '--- ';
    }

    &::after {
      content: ' ---';
    }
  }

  > p + h1 {
    margin-top: 10px;
  }

  > p {
    font-style: italic;
  }

  p + p {
    margin-top: 3px;
  }

  #card {
    font-style: normal;
    text-transform: uppercase;
    color: #e58a60;
  }

  #objective {
    font-style: normal;
    text-transform: uppercase;
    color: ${victoryPointsColor};
  }

  #action {
    font-style: normal;
    text-transform: uppercase;
    color: #62afac;
  }

  #market {
    font-style: normal;
    text-transform: uppercase;
    color: #353535;
    text-shadow: 0.5px 0.5px #51e014;
  }

  #asset {
    font-style: normal;
    text-transform: uppercase;
    color: #605636;
  }

  #ransomware {
    font-style: normal;
    text-transform: uppercase;
    color: #580400;
  }

  #timestamp {
    color: grey;
    font-style: normal;
  }

  #resource {
    color: ${resourceColor};
  }

  #vitality {
    color: ${vitalityColor};
  }

  #victory-points {
    color: ${victoryPointsColor};
  }

  #attack {
    color: firebrick;
  }
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

export const FinishTurnButton = styled.button`
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
  border: none;

  :hover {
    cursor: pointer;
    background-color: #5daeb2;
    top: -75px;
  }

  :disabled {
    background-color: #afc9cd;
    color: grey;
    cursor: not-allowed;
  }
`
