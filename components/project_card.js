import { motion } from "framer-motion"
import Image from "next/image"
import { LinkSVGPath } from "./svg_path"
import Link from 'next/link'

const ProjectCard = () => {

    return (
        <div
            className=' bg-blue-gray-900 rounded-3xl px-8 py-8'
            style={{ maxWidth: 900, height: '66vh' }}
        >
            <Image
                className='rounded-3xl img-fading-bottom'
                src='/images/Screen.png'
                layout={'fill'}
                quality={100}
                objectFit={'cover'}
                loading='eager'
            />

            <div className='space-x-0 absolute bottom-10'>
                <div className='inline-flex items-center text-white'>
                    <motion.p className='text-2xl font-medium mr-2' draggable={false} >
                        Portfolio
                    </motion.p>

                    <Link
                        href={`https://portfolio-git-main-pongsakornnaklang.vercel.app/`}
                        passHref

                    >
                        <motion.button
                            className="py-2 px-2 rounded-full items-center bg-indigo-900 text-white focus:outline-none mr-4"
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <LinkSVGPath />
                            </svg>
                        </motion.button>
                    </Link>

                </div>

                <div className='block space-x-2 my-2'>
                    <span className="text-xs py-1 border-2 border-green-500 px-2 rounded-full text-green-500 align-middle ">Next.js</span>
                    <span className="text-xs py-1 border-2 border-green-500 px-2 rounded-full text-green-500  align-middle ">Tailwind CSS</span>
                    <span className="text-xs py-1 border-2 border-green-500 px-2 rounded-full text-green-500  align-middle ">Framer</span>
                </div>

                <motion.p
                    className="mt-2 text-gray-300 font-extralight "
                    draggable={false}
                >
                    To show my skills and use them to apply for jobs
                </motion.p>
            </div>

        </div>
    )
}

export default ProjectCard
