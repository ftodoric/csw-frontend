import styled from 'styled-components'

export const TeamFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 10px;
`

export const Title = styled.div`
  padding-bottom: 5px;
  position: absolute;
  background-color: white;
  padding-right: 10px;
  transform: translate(0, -50%);
`

export const TitleRule = styled.div`
  border-bottom: solid 1px #dedede;
`

export const TeamNameInput = styled.input`
  margin: 30px 0 20px;
  padding: 10px;
  border-radius: 5px;
  border: solid 1px #c5c5c5;

  :focus {
    outline: none;
  }
`

export const SelectContainer = styled.div`
  margin-top: 30px;
  font-size: 14px;
`
export const SelectLabel = styled.div`
  color: #5f5f5f;
`

export const StyledSelect = styled.select`
  flex-grow: 1;
  margin-top: 5px;
  border-color: #cacaca;
  border-radius: 5px;
  width: 200px;
  padding: 7px;
  color: #686868;
`
