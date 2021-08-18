import styled from 'styled-components'

import { theme } from 'themes/default.styled'

export const AccountLink = styled.span`
  position: absolute;
  top: 15px;
  right: 30px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;

  @media ${theme.breakpoints.mobileDown} {
    top: 5px;
    right: 5px;
  }
`
