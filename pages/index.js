import Head from 'next/head'
import Hero from '../components/hero'
import Container from '../components/container'
import Contents from '../components/contents'

export default function Index() {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <Head>
                <title>Pongsakorn Naklang</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>

            <Container>
                <Hero />
                <Contents />
            </Container>
        </div>
    )
}
