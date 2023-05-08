import Image from "next/image"
import { motion } from "framer-motion"
import ThemeToggle from "./theme_toggle"
const Hero = () => {
    return (
        <div className='relative'>
            <ThemeToggle />
            <motion.div
                className=" text-center py-2 "
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
                    width={150}
                    height={150}
                />

                <p className="mt-4 text-2xl font-thin leading-4 text-gray-500 uppercase">Hello, I'm</p>

                <div className='mt-4 text-3xl leading-8 font-bold text-gray-900 dark:text-white'>PONGSAKORN NAKLANG</div>

                <p className="mt-4 text-indigo-600 dark:text-red-accent-100 font-semibold uppercase">Junior Software developer 👨‍💻</p>

            </motion.div>
        </div>

    )
}

export default Hero
