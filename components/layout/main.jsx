import { AppProvider } from 'context/AppContext'
import { LayoutMain } from 'components/layout/main.styled'
import { GlobalStyle } from 'components/layout/global.styled'

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
