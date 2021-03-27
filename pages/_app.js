import '../styles/globals.css'
import { AnimateSharedLayout } from "framer-motion"
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AnimateSharedLayout type='crossfade'>
        <Head>
          <meta name="keywords" content="pongsakorn naklang,Pongsakorn Naklang,Portfolio,Pongsakorn,Naklang,พงศกร นากลาง" />
          <link rel="shortcut icon" href="/images/profile.jpg" />
        </Head>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ThemeProvider>

  )
}

export default MyApp
