import { motion } from "framer-motion"
import ThemeToggle from "./theme_toggle"

const MotionContainer = ({ children, path }) => {
    return (
        <div>
            <motion.div
                layoutId={`${path}-svg-box`}
                className='bg-indigo-500 dark:bg-gray-800 h-screen w-full pt-4 bg-pages'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
            <ThemeToggle />
        </div>
    )
}

export default MotionContainer
