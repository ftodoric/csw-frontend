import styled from 'styled-components'

export const AssetContainer = styled.div`
  border: solid 1px black;
  outline: solid #76c376;
  width: 400px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.div`
  font-weight: bold;
  font-size: 22px;
`

export const Type = styled.div`
  text-transform: capitalize;
  font-size: 18px;
`

export const Effect = styled.div`
  border: solid 1px grey;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  flex-grow: 1;
  margin-top: 20px;
  text-align: justify;
`

export const Rule = styled.hr`
  color: red;
  width: 100%;
`

export const ActivateAssetForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

export const BidInput = styled.input`
  width: 50px;
  font-size: 16px;
`

export const BidSubmit = styled.input`
  background-color: #76c376;
  border: none;
  color: white;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background-color: #67b567;
  }

  :disabled {
    opacity: 0.5;
  }
`
