import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../themes/theme'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
  )
}

export default MyApp
