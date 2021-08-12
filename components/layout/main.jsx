import { GlobalStyle } from 'components/layout/global.styled'
import { LayoutMain, Logo, Dice } from 'components/layout/main.styled'
import { AppProvider } from 'context/AppContext'

export default function Main({ children }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <LayoutMain>
        <Logo src="images/logo_new.gif" />
        <Dice src="images/dice.png" />
        {children}
      </LayoutMain>
    </AppProvider>
  )
}
