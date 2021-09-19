import { ThemeProvider } from '@material-ui/core/styles'

import '../styles/globals.css'
import 'macro-css'

import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
