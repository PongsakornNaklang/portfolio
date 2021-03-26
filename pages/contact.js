import { motion } from "framer-motion"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import MotionContainer from "../components/motion_container"
import Image from "next/image"

const { ContactSVGPath } = require("../components/svg_path")

const Contact = () => {
    return (
        <MotionContainer path='contact'>
            <Head>
                <title>Contact</title>
            </Head>

            <Container>
                <TitleBar title='Contact' svgPath={<ContactSVGPath />} />

                <motion.div
                    className="bg-white shadow rounded-lg mt-4 p-8 overflow-auto w-full grid gap-8 grid-cols-1 md:grid-cols-2"
                    style={{ maxHeight: '70vh' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [0.8, 1] }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                >

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                            <div className="text-gray-700 mt-8">
                                Hate forms? Send us an <span className="underline">email</span> instead.
                                </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Image src='/images/undraw_contact_us_15o2.svg' layout='intrinsic' width={1000} height={500} />
                        </div>
                    </div>
                    <div className="w-full space-y-4 self-center">
                        <div className="grid grid-cols-5 auto-cols-max items-center">
                            <Image className='' src='/images/gmail.svg' height={40} width={40} />
                            <p className="text-lg text-gray-900 col-span-4">pongsakornnaklang@gmail.com</p>
                        </div>
                        <div className="grid grid-cols-5 auto-cols-max items-center">
                            <Image className='' src='/images/facebook.svg' height={40} width={40} />
                            <p className="text-lg text-gray-900 col-span-4">Pongsakorn Naklang</p>
                        </div>
                        <div className="grid grid-cols-5 auto-cols-max items-center">
                            <Image className='' src='/images/github.svg' height={40} width={40} />
                            <p className="text-lg text-gray-900 col-span-4">PongsakornNaklang</p>
                        </div>
                        <div className="grid grid-cols-5 auto-cols-max items-center">
                            <Image className='' src='/images/telephone.svg' height={40} width={40} />
                            <p className="text-lg text-gray-900 col-span-4">097-124-0007</p>
                        </div>
                        <div className="grid grid-cols-5 auto-cols-max items-center">
                            <Image className='' src='/images/line.svg' height={40} width={40} />
                            <Image className='col-span-4' src='/images/qr.jpg' layout='responsive' height={56} width={56} />
                        </div>
                    </div>
                </motion.div>
            </Container >

        </MotionContainer >
    )
}

export default Contact
