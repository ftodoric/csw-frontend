import styled from 'styled-components'

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
  width: 200px;
`

export const Field = styled.div`
  margin-top: 5px;
`

export const SendButton = styled.input`
  background-color: rgb(240, 234, 175);
  color: rgb(135, 119, 37);
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
    background-color: #e6df9c;
  }
`
