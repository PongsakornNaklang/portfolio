import { motion } from "framer-motion"

const MotionContainer = ({ children, path }) => {
    return (
        <motion.div
            layoutId={`${path}-svg-box`}
            className='bg-indigo-500 dark:bg-gray-800 h-screen w-full pt-4 bg-pages overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default MotionContainer
