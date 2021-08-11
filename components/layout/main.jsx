import { GlobalStyle } from 'components/layout/global.styled'
import { LayoutMain } from 'components/layout/main.styled'
import { AppProvider } from 'context/AppContext'

export default function Main({ children }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <LayoutMain>
        <img src="images/logo_new.gif" width="450px" />
        <img src="images/dice.png" width="400px" />
        {children}
      </LayoutMain>
    </AppProvider>
  )
}
