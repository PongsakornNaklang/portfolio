import { motion } from "framer-motion"

const Moon = () => {
    return (
        <motion.svg className='text-yellow-500 h-7 w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            layoutId='theme'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0.5,1.3,1], opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </motion.svg>
    )
}

export default Moon
