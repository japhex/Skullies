import styled from 'styled-components'

export const MintContainer = styled.div`
  position: relative;
  background: url(images/mint.png) no-repeat;
  background-size: cover;
  width: 450px;
  height: 425px;
  margin-top: 50px;
`

export const Mint = styled.div`
  position: absolute;
  top: 38px;
  left: 181px;
  font-size: 5rem;
`

export const MintAmount = styled.div`
  position: absolute;
  top: 156px;
  left: 227px;
  font-size: 25px;
  font-family: 'Eusthalia Sans Stamped';
`
export const Conditions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 210px;
  left: 167px;
  font-size: 35px;
  line-height: 2rem;
`
export const Description = styled.div`
  width: 290px;
  position: absolute;
  top: 282px;
  left: 103px;
  color: #fff;
  font-size: 39px;
  text-align: center;
`

export const MintIcon = styled.div`
  position: absolute;
  top: 156px;
  left: ${({ minus }) => (minus ? '146px' : '284px')};
  cursor: pointer;
`
