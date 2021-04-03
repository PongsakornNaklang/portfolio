import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import SvgPath from "./svg_path"

const LabCard = () => {
    return (
        <motion.div
            className=' bg-gray-600 mr-4 mb-4 rounded-3xl relative'
            style={{ width: 240, height: 240 }}
        >
            <Image
                className='rounded-3xl img-fading-bottom'
                src={'/images/xo.png'}
                layout={'fill'}
                quality={100}
                objectFit={'cover'}
                loading='eager'

            />
            <div className='absolute bottom-4 right-4 left-4 inline-flex items-center'>
                <p className='text-white text-base mr-2'>XO Game</p>
                <Link
                    href={'https://xo-game.vercel.app/'}
                    passHref
                >
                    <motion.svg
                        whileHover={{ scale: 1.1, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}
                        className='h-4 w-4 text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {SvgPath.link}
                    </motion.svg>
                    
                </Link>
            </div>
        </motion.div>
    )
}

export default LabCard
