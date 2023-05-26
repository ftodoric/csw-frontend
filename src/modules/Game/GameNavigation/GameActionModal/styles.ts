import styled from 'styled-components'

export const DialogContainer = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translate(-50%, -100%);
  background-color: white;
  box-shadow: 0 0 20px #aaa;
  border-radius: 10px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`

export const CloseButton = styled.button`
  /* background-color: red; */
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: none;
  background-color: white;

  :hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`
