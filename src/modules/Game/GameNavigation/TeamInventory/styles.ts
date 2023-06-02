import styled from 'styled-components'

export const InventoryModal = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0 0 100px #333;
`

export const MarketTitle = styled.div`
  display: flex;
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
`

export const Rule = styled.hr`
  color: red;
  width: 100%;
`

export const MarketList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const EmptyState = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
  font-style: italic;
`

export const CloseButton = styled.div`
  position: fixed;
  top: 60px;
  right: 30px;
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
