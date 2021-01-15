import { createGlobalStyle, ThemeProvider } from 'styled-components'
import GlobalStyle, { Theme } from '../src/globalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
