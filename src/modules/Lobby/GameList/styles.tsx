import styled from 'styled-components'

export const GameListContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin-top: 50px;
`

export const ItemWrapper = styled.div`
  display: flex;
  padding: 15px 0;
  box-sizing: border-box;
  width: 100%;

  #game-index,
  #game-link {
    width: 50px;
  }

  #game-desc {
    width: 100px;
  }

  #game-desc,
  #game-link {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    > a {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  > div {
    width: calc((100% - 200px) / 3);
    display: flex;
    align-items: center;
  }

  #listener {
    display: flex;
    align-items: center;
  }

  #game-desc #listener:hover {
    cursor: pointer;
  }
`

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const DescriptionContainer = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  padding: 15px 10px 15px 20px;
  box-shadow: 1px 1px 10px #c0c0c0;
  border-radius: 5px;
  width: 400px;
  transform: translate(-100%, 0);
  justify-content: space-between;
  align-items: flex-start;
  text-align: justify;
  min-height: 50px;

  > div:first-child {
    line-height: 1.2;
    font-style: italic;
    color: #494949;
  }
`

export const DescriptionClose = styled.div`
  margin-left: 10px;
  border-radius: 20px;
  display: flex;
  padding: 3px;
  position: relative;
  top: -3px;

  :hover {
    cursor: pointer;
    background-color: rgb(178, 34, 34, 0.1);
  }
`
