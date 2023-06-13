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
  margin-top: 7px;
`

export const SendButton = styled.input`
  background-color: rgba(190, 64, 55, 0.4);
  color: rgb(143, 75, 70);
  border: none;
  border-radius: 10px;
  height: 40px;
  font-size: 18px;
  width: 170px;
  position: relative;
  left: 170px;
  top: 5px;

  :hover {
    cursor: pointer;
    background-color: rgba(190, 64, 55, 0.5);
  }

  :disabled {
    opacity: 0.5;
  }
`

export const DiceRollContainer = styled.div`
  margin-top: 20px;
  width: 60px;
  height: 60px;
  animation: dice-bounce 0.5s;

  @keyframes dice-bounce {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-15px);
    }
    40% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-3px);
    }
    65% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(0);
    }
  }
`
