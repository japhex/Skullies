import { GlobalStyle } from 'components/layout/global.styled'
import { LayoutMain, Logo } from 'components/layout/main.styled'
import { AppProvider } from 'context/AppContext'

export default function Main({ children }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <LayoutMain>
        <Logo src="images/logo_new.gif" />
        <img src="images/dice.png" width="400px" />
        {children}
      </LayoutMain>
    </AppProvider>
  )
}
