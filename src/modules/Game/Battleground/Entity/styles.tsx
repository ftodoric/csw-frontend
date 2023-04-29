import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  background-color: white;
  border-radius: 5px;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  padding: 0 10px;
  box-shadow: 0 0 2px #afafaf;
`

export const VictoryPoints = styled.div`
  display: flex;
  align-items: center;
  color: #ac5dd1;
`

export const Middle = styled.div`
  height: calc(100% - 45px);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin-left: 10px;
    text-align: center;
  }
`

export const Footer = styled.div`
  height: 20px;
  display: flex;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const AnimationContainer = styled.div<{ color: string }>`
  height: 106px;
  width: 206px;
  position: absolute;
  top: -3px;
  left: -3px;
  border-radius: 5px;

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -7.5%;
    top: -55%;
    width: 115%;
    height: 215%;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background: conic-gradient(${(p) => p.color}55, ${(p) => p.color});
    animation: rotate 8s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 3px;
    top: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    background: white;
    border-radius: 5px;
  }
`
