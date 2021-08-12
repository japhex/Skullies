import styled from 'styled-components'

import { theme } from 'themes/default.styled'

export const MintContainer = styled.div`
  position: relative;
  background: url(images/mint.png) no-repeat;
  background-size: cover;
  width: 450px;
  height: 425px;
  margin-top: 50px;

  @media ${theme.breakpoints.mobileDown} {
    width: 100%;
    height: 378px;
  }
`

export const Mint = styled.div`
  position: absolute;
  top: 38px;
  left: 181px;
  font-size: 5rem;

  @media ${theme.breakpoints.mobileDown} {
    top: 37px;
    left: 163px;
    font-size: 4rem;
  }
`

export const MintAmount = styled.div`
  position: absolute;
  top: 156px;
  left: 227px;
  font-size: 25px;
  font-family: 'Eusthalia Sans Stamped';

  @media ${theme.breakpoints.mobileDown} {
    top: 141px;
    left: 204px;
    font-size: 23px;
  }
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

  @media ${theme.breakpoints.mobileDown} {
    top: 188px;
    left: 144px;
  }
`
export const Description = styled.div`
  width: 290px;
  position: absolute;
  top: 282px;
  left: 103px;
  color: #fff;
  font-size: 39px;
  text-align: center;

  @media ${theme.breakpoints.mobileDown} {
    top: 256px;
    left: 77px;
    font-size: 33px;
  }
`

export const MintIcon = styled.div`
  position: absolute;
  top: 156px;
  left: ${({ minus }) => (minus ? '146px' : '284px')};
  cursor: pointer;

  @media ${theme.breakpoints.mobileDown} {
    top: ${({ minus }) => (minus ? '137px' : '137px')};
    left: ${({ minus }) => (minus ? '130px' : '255px')};
  }
`
