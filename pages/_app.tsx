import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header';
import Box6 from '../components/Box6/Box6'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header/>
  <Component {...pageProps} />
  <Box6/>
  </>
  )
}
