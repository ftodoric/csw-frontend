import styled from 'styled-components'

import { errorRedColor, primaryColor, primaryHoverColor, secondaryColor } from '@colors'

export const FormContainer = styled.form`
  width: 600px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TeamsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const VersusLabel = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  background-color: white;
  padding: 0 10px;
  color: grey;
  font-style: italic;
`

export const ErrorContainer = styled.div`
  color: ${errorRedColor};
  margin-top: 10px;
  font-size: 14px;
`

export const TimeLimitContainer = styled.div`
  margin-top: 30px;
  color: #5f5f5f;

  #label {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TimeLimitInputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    width: 50px;
  }

  #unit {
    margin-left: 5px;
  }
`

export const GameDescContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 50px;

  > textarea {
    width: 100%;
    height: 100px;
    resize: vertical;
    padding: 10px;
    box-sizing: inherit;
    border-color: #cacaca;
    border-radius: 4px;
    color: #434343;
  }
`

export const SubmitButton = styled.input`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  border: none;
  padding: 10px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  width: 150px;
  margin-top: 20px;

  :hover {
    cursor: pointer;
    background-color: ${primaryHoverColor};
  }
`
