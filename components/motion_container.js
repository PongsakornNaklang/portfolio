import { motion } from "framer-motion"
import {  useRouter } from 'next/router'

const MotionContainer = ({ children }) => {
    const router = useRouter()
    const path = router.pathname.split('/')[1]

    return (
        <motion.div
            layoutId={`${path}-svg-box`}
            className='bg-indigo-500 h-screen w-screen pt-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    )
}

export default MotionContainer
