import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle, { Theme } from '../src/globalStyles'
import { AuthProvider} from '../src/Contexts/AuthContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
