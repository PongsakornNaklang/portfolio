import { motion } from "framer-motion"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import MotionContainer from "../components/motion_container"
import Image from "next/image"
import { useTheme } from "next-themes"

const { ContactSVGPath } = require("../components/svg_path")

const Contact = () => {
    const { theme } = useTheme()
    return (
        <MotionContainer path='contact'>
            <Head>
                <title>Contact</title>
            </Head>

            <Container>
                <TitleBar title='Contact' svgPath={<ContactSVGPath />} />

                <motion.div
                    className="bg-white dark:bg-gray-700 shadow rounded-lg mt-4 p-8 overflow-auto w-full grid gap-8 grid-cols-1 md:grid-cols-2 "
                    style={{ maxHeight: '70vh' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [0.8, 1] }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                >

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white">Lets talk about everything!</h2>
                            <div className="text-gray-700 dark:text-gray-400 mt-8">
                                Hate forms? Send us an <span className="underline">email</span> instead.
                                </div>
                        </div>
                        <div className="mt-8 text-center">
                            {
                                theme === 'dark' ? <Image src='/images/undraw_contact_us_15o2_red.svg' draggable={false} layout='intrinsic' width={1000} height={500} />
                                    : <Image src='/images/undraw_contact_us_15o2.svg' draggable={false} layout='intrinsic' width={1000} height={500} />
                            }
                        </div>
                    </div>
                    <div className="w-full space-y-4 self-center">
                        <div className="grid grid-cols-6 auto-cols-max items-center">
                            <Image className='' src='/images/gmail.svg' height={30} width={30} />
                            <p className="text-lg text-gray-900 dark:text-gray-200 col-span-5">pongsakornnaklang@gmail.com</p>
                        </div>
                        <div className="grid grid-cols-6 auto-cols-max items-center">
                            <Image className='' src='/images/facebook.svg' height={30} width={30} />
                            <p className="text-lg text-gray-900 dark:text-gray-200 col-span-5">Pongsakorn Naklang</p>
                        </div>
                        <div className="grid grid-cols-6 auto-cols-max items-center">
                            <Image className='' src='/images/github.svg' height={30} width={30} />
                            <p className="text-lg text-gray-900 dark:text-gray-200 col-span-5">PongsakornNaklang</p>
                        </div>
                        <div className="grid grid-cols-6 auto-cols-max items-center">
                            <Image className='' src='/images/telephone.svg' height={30} width={30} />
                            <p className="text-lg text-gray-900 dark:text-gray-200 col-span-5">097-124-0007</p>
                        </div>
                        <div className="grid grid-cols-6 auto-cols-max items-center">
                            <Image className='' src='/images/line.svg' height={30} width={30} />
                            <Image className='col-span-5' src='/images/qr.jpg' layout='responsive' height={56} width={56} />
                        </div>
                    </div>
                </motion.div>
            </Container >

        </MotionContainer >
    )
}

export default Contact
