import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle, { Theme } from '../src/globalStyles'
import { AuthProvider } from '../src/Contexts/AuthContext'
import { DateProvider } from '../src/Contexts/DateContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <DateProvider>
            <Component {...pageProps} />
          </DateProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
