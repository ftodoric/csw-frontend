import styled from 'styled-components'

export const BattlegroundContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .react-flow__pane {
    cursor: default;
  }

  .react-flow__node {
    cursor: default;
    z-index: -1;
  }

  .react-flow__handle {
    visibility: hidden;
  }

  .react-flow__edge {
    cursor: default;
  }
`
