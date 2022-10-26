import type { AppProps } from 'next/app'
import {SessionProvider } from 'next-auth/react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Header from '../components/header'
import GlobalStyle from '../globalstyles'

const theme: DefaultTheme = {
    primary: '#111',
    secondary: '#0070f3',
    white:'#fff',
    lightBlue:'#3e64e5',
    sliver:'silver',
    darkGray:'#31343e'
}

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps.session);
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
        <GlobalStyle />
        <Header/>
        <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
