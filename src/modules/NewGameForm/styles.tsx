import { errorRedColor, primaryColor, primaryHoverColor } from '@colors'
import styled from 'styled-components'

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

export const ErrorContainer = styled.div`
  color: ${errorRedColor};
  margin-top: 10px;
  font-size: 14px;
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
  color: white;
  border: none;
  padding: 7px 10px;
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
