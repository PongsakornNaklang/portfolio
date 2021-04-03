import { motion } from "framer-motion"
import Image from "next/image"
import SvgPath from "./svg_path"
import Link from 'next/link'

const ProjectCard = ({ name = '', desc = '', link = '', techStack = [], coverSrc = '' }) => {

    return (
        <div
            className='bg-gray-600 rounded-3xl '
            style={{ maxWidth: 900, height: '66vh' }}
        >
            {
                coverSrc.length !== 0 ?
                        <Image
                            className='rounded-3xl img-fading-bottom'
                            src={coverSrc}
                            layout={'fill'}
                            quality={100}
                            objectFit={'cover'}
                            loading='eager'
                        />: null
            }


            <div className=' absolute bottom-10 px-8 place-content-between'>
                <div className='inline-flex items-center text-white'>
                    <motion.p className='text-2xl font-medium mr-3' draggable={false} >
                        {name}
                    </motion.p>

                    {
                        link.length !== 0 ?
                            <Link
                                href={link}
                                passHref
                            >
                                <motion.svg
                                    whileHover={{ scale: 1.25, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.9 }}
                                    className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {SvgPath.link}
                                </motion.svg>
                            </Link>
                            : null
                    }


                </div>

                <div className='block space-x-2 my-2'>
                    {
                        techStack.map((tech, index) => {
                            return <span key={`${index}`} className="text-xs py-1 px-2 rounded-full text-white bg-red-accent-200 align-middle ">{tech}</span>
                        })
                    }
                </div>

                <motion.p
                    className="mt-2 text-gray-300 font-extralight "
                    draggable={false}
                >
                    {desc}
                </motion.p>
            </div>

        </div>
    )
}

export default ProjectCard
