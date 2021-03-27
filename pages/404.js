import Head from "next/head"
import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className='flex h-screen w-screen justify-center items-center bg-hero'>
            <Head>
                <title>ไม่มีหน้านี้ครับ</title>
            </Head>

            <div className='text-center'>
                <p className='text-gray-900 text-3xl '>ไม่มีหน้านี้ครับ</p>
                <br />
                <Link href='/' passHref>
                    <div className='text-gray-500 text-xl cursor-pointer'>ไปหน้าแรก</div>
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage
