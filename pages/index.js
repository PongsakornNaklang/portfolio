import Head from 'next/head'
import Hero from '../components/hero'
import Container from '../components/container'
import ThemeToggle from '../components/theme_toggle'
import Contents from '../components/contents'

export default function Index() {

    return (
        <div className='dark:bg-gray-800 min-h-screen overflow-hidden'>
            <Head>
                <title>Pongsakorn Naklang</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <Container>
                <Hero />
                <Contents />
                <ThemeToggle />
            </Container>
        </div>
    )
}
