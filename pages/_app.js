import '../styles/globals.css'
import { AuthUserProvider } from '../context/AuthUserContext'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }) {
  return <ThemeProvider attribute='class'><AuthUserProvider><Component {...pageProps} /></AuthUserProvider></ThemeProvider>
}

export default MyApp
