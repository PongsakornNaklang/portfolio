import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{ duration: 0.5 }}
        >
            <Image
                className='rounded-full mx-auto'
                src="/images/profile.jpg"
                alt="Me"
                draggable='false'
                width={200}
                height={200}
            />

            <p className="mt-4 text-2xl font-thin leading-4 text-gray-500 uppercase">Hello, I'm</p>

            <div className='mt-4 text-3xl leading-4 font-bold text-gray-900'>PONGSAKORN NAKLANG</div>

            <p className="mt-4 text-3xl font-thin leading-4 text-gray-500 uppercase">;</p>

            <p className="mt-4 text-indigo-600 font-semibold uppercase">Software developer</p>
        </motion.div>
    )
}

export default Hero
