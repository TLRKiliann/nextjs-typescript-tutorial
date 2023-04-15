import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../components/context/ThemeContext'
import Box from '../components/context/Box'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Box />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
