import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  background-color: white;
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  padding: 0 10px;
`;

export const Middle = styled.div`
  height: calc(100% - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  height: 20px;
  display: flex;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
