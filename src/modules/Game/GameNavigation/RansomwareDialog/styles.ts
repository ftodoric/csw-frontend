import styled from 'styled-components'

export const RansomwareDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-style: italic;
  box-sizing: border-box;
`

export const RansomwareForm = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: flex-end;
  align-items: center;
`

export const SubmitYes = styled.input`
  background-color: #409c69;
  border: none;
  border-radius: 5px;
  color: white;
  width: 50px;
  height: 30px;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const SubmitNo = styled.input`
  margin-left: 10px;
  background-color: firebrick;
  border: none;
  border-radius: 5px;
  color: white;
  width: 50px;
  height: 30px;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const SubmitOk = styled.input`
  margin-left: 10px;
  background-color: firebrick;
  border: none;
  border-radius: 5px;
  color: white;
  width: 50px;
  height: 30px;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
