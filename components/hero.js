import Image from "next/image"
import { motion } from "framer-motion"
import ThemeToggle from "./theme_toggle"
const Hero = () => {
    return (
        <motion.div
            className="relative text-center py-2 "
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{ duration: 0.5 }}
        >
            
            <ThemeToggle />
            <Image
                className='rounded-full mx-auto'
                src="/images/profile.jpg"
                alt="Me"
                draggable='false'
                width={200}
                height={200}
            />

            <p className="mt-4 text-2xl font-thin leading-4 text-gray-500 uppercase">Hello, I'm</p>

            <div className='mt-4 text-3xl leading-8 font-bold text-gray-900 dark:text-white'>PONGSAKORN NAKLANG</div>

            <p className="mt-4 text-3xl font-thin leading-4 text-gray-500 uppercase">;</p>

            <p className="mt-4 text-indigo-600 font-semibold uppercase">Software developer</p>
            
        </motion.div>
    )
}

export default Hero
