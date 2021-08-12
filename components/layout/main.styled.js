import styled from 'styled-components'

import { theme } from 'themes/default.styled'

export const LayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(images/background.png);
  background-size: cover;
`

export const Logo = styled.img`
  width: 450px;

  @media ${theme.breakpoints.tabletDown} {
    width: 100%;
  }
`

export const Dice = styled.img`
  width: 400px;

  @media ${theme.breakpoints.tabletDown} {
    width: 70%;
    margin-top: 10px;
  }
`
