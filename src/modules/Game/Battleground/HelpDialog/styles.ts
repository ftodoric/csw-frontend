import styled from 'styled-components'

import { blueTeamColor, resourceBgColor } from '@colors'

export const HelpDialogModal = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: calc(100vw);
  height: calc(100vh - 50px);
  z-index: 1000;
  background-color: white;
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const ModalBody = styled.div`
  padding: 0 20px 20px;
`

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 20px 0 15px 20px;
  box-shadow: 0 0 5px #777;
  z-index: 10;
`

export const Title = styled.div`
  font-size: 26px;
  color: #444;
  font-weight: bold;
`

export const Body = styled.div`
  margin-top: 20px;

  #resource {
    color: #877725;
  }

  #vitality {
    color: #105881;
  }

  #victory-points {
    color: #8729b3;
  }

  #attack {
    color: firebrick;
  }

  #uk-attack {
    color: purple;
  }

  #russia-attack {
    color: orange;
  }

  #black-market {
    text-shadow: 0 0 1px lime;
  }

  .emphasis {
    font-weight: bold;
  }
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.div`
  margin: 10px 0 40px;
  max-width: 1000px;

  table#revitalise {
    border: 1px solid #333;
    border-collapse: collapse;
    margin-top: 10px;

    th {
      width: 100px;
      border-bottom: 1px solid #333;
      padding: 7px 0;
      vertical-align: middle;
    }

    th#vitality {
      background-color: rgb(178, 204, 215);
      border-right: 1px solid #333;
    }

    th#resource {
      color: #877725;
      background-color: rgb(240, 234, 175);
    }

    td {
      text-align: center;
      border-bottom: 1px solid #333;
      padding: 3px 0;
    }

    td#vitality {
      border-right: 1px solid #333;
      color: black;
    }

    td#resource {
      color: #877725;
    }
  }
`

export const Paragraph = styled.div`
  margin-top: 17px;
`

export const UnorderedList = styled.ul`
  list-style: inside;
  padding: 5px 10px;
`

export const ListItem = styled.li`
  margin-top: 5px;
`

// Cell width: 50px
// Cell height: 30px
export const CombatResolutionTable = styled.div`
  width: 400px;
  margin: 40px 0;
  box-sizing: border-box;
`

export const FirstTwoRows = styled.div`
  display: flex;
  width: 100%;
`

export const EmptySpace = styled.div`
  width: 100px;
  height: 60px;
`

export const DieRollHeader = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const CRTColumnHeader = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid #333;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

export const CRTRow = styled.div<{ last?: boolean }>`
  width: 100%;
  height: 30px;
  display: flex;
  box-sizing: border-box;
  border-top: 1px solid #333;
  border-right: solid 1px #333;
  ${(p) => p.last && 'border-bottom: solid 1px #333;'}
  ${(p) => p.last && 'border-bottom-right-radius: 5px;'}
`

export const CRTCell = styled.div<{ grey?: boolean; red?: boolean; green?: boolean; resourceBg?: boolean }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-left: solid 1px #333;
  ${(p) => p.grey && 'background-color: #ccc;'}
  ${(p) => p.green && 'background-color: #08c450;'}
  ${(p) => p.red && 'background-color: #ef3d3d;'}
  ${(p) => p.resourceBg && `background-color: ${resourceBgColor};`}
`

export const RestOfTheTable = styled.div`
  display: flex;
  width: 100%;
  height: calc(6 * 30px);
  position: relative;
`

export const WhiteSpaceForVerticalFlip = styled.div`
  width: calc(50px);
  height: calc(6 * 30px);
`

export const ResourceSpentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg) translate(-100%, 0);
  transform-origin: top left;
  height: 50px;
  width: calc(6 * 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-sizing: border-box;
`

export const TableData = styled.div`
  width: calc(7 * 50px);
  height: calc(6 * 30px);
`

export const AttributionTable = styled.div`
  width: 700px;
  height: 360px;
  margin: 50px 0;

  div {
    box-sizing: border-box;
  }
`

export const ATFirstTwoRows = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
`

export const ATEmptySpace = styled.div`
  width: 200px;
  height: 60px;
`

export const ATHeader = styled.div`
  width: 500px;
  height: 60px;
`

export const ATFirstRow = styled.div`
  width: 500px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #444;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const ATSecondRow = styled.div`
  width: 500px;
  height: 30px;
  display: flex;
  border-left: 1px solid #444;
  border-right: 1px solid #444;
  box-sizing: border-box;
`

export const ATLevel1Header = styled.div`
  width: 200px;
  height: 30px;
  background-color: #ef3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ATLevel2Header = styled.div`
  width: 300px;
  height: 30px;
  background-color: #ef3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #444;
  box-sizing: border-box;
`

export const ATRestOfTable = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
`

export const ATSpaceForVerticalElement = styled.div`
  width: 50px;
  height: 300px;
`

export const ATEntityHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg) translate(-100%, 0);
  transform-origin: top left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: solid 1px #444;
`

export const ATEntities = styled.div`
  width: 150px;
  height: 300px;
  border-bottom: solid 1px #444;
`

export const ATEntity = styled.div<{ russia?: boolean; uk?: boolean }>`
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-top: solid 1px #444;
  ${(p) => p.uk && `background-color: ${blueTeamColor};`}
  ${(p) => p.russia && 'background-color: #ef3d3d;'}
`

export const ATData = styled.div`
  width: 500px;
  height: 300px;
  border-bottom: 1px solid #444;
  border-right: 1px solid #444;
  border-bottom-right-radius: 5px;
`

export const ATDataRow = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  font-size: 14px;
`

export const ATLevel1Cell = styled.div`
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: solid 1px #444;
  border-left: solid 1px #444;
`

export const ATLevel2Cell = styled.div`
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: solid 1px #444;
  border-left: solid 1px #444;
`

export const CloseButton = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`
