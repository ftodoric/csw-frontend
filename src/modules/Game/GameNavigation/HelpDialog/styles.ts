import styled from 'styled-components'

export const HelpDialogModal = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: calc(100vw);
  height: calc(100vh - 50px);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const Title = styled.div`
  font-size: 26px;
  color: #444;
  font-weight: bold;
`

export const Body = styled.div`
  margin-top: 20px;
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.div`
  margin: 10px 0 40px;

  #resource {
    color: #877725;
  }

  #vitality {
    color: #105881;
  }

  #victory-points {
    color: #8729b3;
  }
`

export const Paragraph = styled.div`
  margin-top: 17px;
`

export const UnorderedList = styled.ul`
  list-style: inside;
  padding: 5px 10px;
`

export const ListItem = styled.li`
  margin-top: 5px;
`

export const CloseButton = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  :hover {
    background-color: #efefef;
    cursor: pointer;
  }
`
