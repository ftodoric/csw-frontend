import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255, 0.4);
  z-index: 100;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CenterContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: flex-start;

  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: 330px;
    height: 500px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.3s;
    transform-style: preserve-3d;
    animation: cardDraw 1s;
    animation-fill-mode: forwards;
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-card-back {
    background-color: rgba(0, 0, 0, 0);
    background-image: url(/images/eventCards/cardBackground.png);
    background-size: 330px 500px;
    border-radius: 10px;
  }

  .flip-card-front {
    transform: rotateY(180deg);
  }

  @keyframes cardDraw {
    from {
      bottom: 0px;
      right: 0px;
      transform: scale(0);
    }
    to {
      bottom: 50%;
      right: 50%;
      transform: scale(1) translate(50%, 50%) rotateY(180deg);
    }
  }
`

export const EventCard = styled.img`
  width: 330px;
  height: 500px;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 5px;
  animation: delay 1.2s;

  :hover {
    background-color: #aaaaaa55;
    cursor: pointer;
  }

  @keyframes delay {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`
