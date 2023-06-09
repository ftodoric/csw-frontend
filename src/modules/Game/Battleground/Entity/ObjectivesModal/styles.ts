import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  z-index: 1000;
  background-color: white;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  box-shadow: 0 0 40px #888;
  border-radius: 10px;
`

export const Title = styled.div`
  font-size: 26px;
  color: #444;
  font-weight: bold;
`

export const Body = styled.div`
  margin-top: 20px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.div`
  font-weight: bold;
  font-size: 18px;
`

export const Description = styled.div`
  margin: 15px 0 40px;

  #resource {
    color: #877725;
  }

  #vitality {
    color: #105881;
  }

  #victory-points {
    color: #8729b3;
  }

  #uk {
    color: #105881;
  }

  #russia {
    color: firebrick;
  }
`

export const Paragraph = styled.div`
  margin-top: 10px;
`

export const UnorderedList = styled.ul`
  list-style: inside;
  padding: 5px 10px;
`

export const ListItem = styled.li`
  margin-top: 5px;
`

export const CloseButton = styled.div`
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
