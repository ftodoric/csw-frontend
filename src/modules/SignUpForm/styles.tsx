import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  font-size: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px; ;
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  padding: 5px;
`;

export const StyledHint = styled.div`
  color: firebrick;
  margin-top: 5px;
  font-size: 12px;
`;
