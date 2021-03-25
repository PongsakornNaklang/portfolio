import { motion } from "framer-motion"
import { useRouter } from "next/router"

const TitleBar = ({ title, svgPath }) => {
    const router = useRouter()
    const link = router.pathname.split('/')[1]

    return (
        <div className='inline-flex w-full'>
            <motion.div
                className='h-16 w-16 justify-start'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <motion.button
                    className="py-3 px-3 rounded-full items-center bg-indigo-900 text-white focus:outline-none"
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => router.push('/')}
                >
                    <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </motion.button>
            </motion.div>

            <div className='flex inline-flex justify-end h-18 w-full items-center '>
                <motion.svg
                    layoutId={`${link}-svg`}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-8 w-8 text-white `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    {svgPath}
                </motion.svg>

                <motion.p
                    layoutId={`${link}-title`}
                    className="ml-6 text-3xl leading-3 font-medium text-white "
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {title}
                </motion.p>
            </div>
        </div>
    )
}

export default TitleBar