import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-top: 200px;
  box-sizing: border-box;
`;

export const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: firebrick;
`;

export const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  border-bottom: solid 1px;
  padding: 5px 10px 5px 5px;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  background-color: firebrick;
  color: #f0f0f0;
  border: none;
  padding: 7px 10px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;

  :hover {
    cursor: pointer;
  }
`;

export const AlternativeLink = styled.div`
  margin-top: 40px;
  font-size: 12px;

  :hover {
    color: firebrick;
    text-decoration: underline;
  }
`;
