import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme} >
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
