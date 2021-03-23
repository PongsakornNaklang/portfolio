import Head from 'next/head'
import Hero from '../components/hero'
import Container from '../components/container'
import Contents from '../components/contents'

export default function Index() {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <Head>
                <title>Hello</title>
            </Head>

            <Container>
                <Hero />
                <Contents />
            </Container>
        </div>
    )
}
