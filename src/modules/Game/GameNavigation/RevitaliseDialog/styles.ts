import styled from 'styled-components'

import { errorRedColor } from '@colors'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  color: #444;
  font-size: 14px;
  width: 300px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Field = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;

  > input {
    width: 50px;
    margin-right: 10px;
  }
`

export const ErrorContainer = styled.div`
  height: 15px;
  margin-top: 5px;
  color: ${errorRedColor};
`

export const SendButton = styled.input`
  background-color: rgb(178, 204, 215);
  color: rgb(16, 88, 129);
  border: none;
  border-radius: 10px;
  height: 40px;
  font-size: 18px;
  width: 100px;
  position: absolute;
  top: 70px;
  left: 250px;

  :hover {
    cursor: pointer;
    background-color: #a3c5d4;
  }

  :disabled {
    opacity: 0.4;
  }
`
