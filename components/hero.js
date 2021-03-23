import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className="text-center">
            <span className="relative left-72 ">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                    <defs>
                        <pattern
                            id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                        width="52"
                        height="24"
                    />
                </svg>
            </span>

            <motion.figure
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: 1,
                }}
                transition={{ delay: 0.1 }}
            >
                <Image
                    className='rounded-full mx-auto'
                    src="/images/profile.jpg"
                    loading='lazy'
                    alt="Me"
                    draggable='false'
                    width={200}
                    height={200}
                />
            </motion.figure>


            <motion.p
                className="mt-4 text-3xl leading-8 text-gray-500 uppercase"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{ delay: 0.5 , duration: 1}}
            >
                Hello, I'm
                <div className='font-bold text-gray-900'>PONGSAKORN NAKLANG</div>
                ;
            </motion.p>
            <motion.p
                className="mt-4 text-indigo-600 font-semibold uppercase"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                }}
                transition={{ delay: 1, duration: 1 }}
            >
                Software developer
            </motion.p>
        </div>
    )
}

export default Hero
