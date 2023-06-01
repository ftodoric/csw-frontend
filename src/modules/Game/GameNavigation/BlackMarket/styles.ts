import styled from 'styled-components'

export const BlackMarketModal = styled.div`
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
  display: flex;
  gap: 20px;
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

export const ConcludeBidding = styled.div`
  position: fixed;
  bottom: 20px;
  right: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: rgb(68, 68, 68);
  color: rgb(200, 200, 200);
  font-size: 18px;

  :hover {
    background-color: #333;
    cursor: pointer;
  }
`
