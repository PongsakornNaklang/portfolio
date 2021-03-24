import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

const Menu = ({ title, subtitle, svgPath, link }) => {
    const [isHoverMenu, setIsHoverMenu] = useState(false)

    return (
        <Link href={`/${link}`} passHref>
            <motion.div
                className="relative cursor-pointer items-center"
                style={{ width: 330, }}
            >
                <motion.figure
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setIsHoverMenu(true)}
                    onHoverEnd={() => setIsHoverMenu(false)}
                >
                    <dt>
                        <motion.div
                            layoutId={`${link}-svg-box`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute flex items-center justify-center h-14 w-14 rounded-md ${isHoverMenu ? 'bg-indigo-900' : 'bg-indigo-500'}  text-white `}
                        >
                            <motion.svg
                                transition={{ duration: 0.5 }}
                                layoutId={`${link}-svg`}
                                className={`h-8 w-8 ${isHoverMenu ? 'animate-pulse' : ''} `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                {svgPath}
                            </motion.svg>
                        </motion.div>
                        <motion.p
                            layoutId={`${link}-title`}
                            className="ml-20 text-lg leading-4 font-medium text-gray-900 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {title}
                        </motion.p>
                    </dt>
                    <motion.dd
                        className="mt-2 ml-20 text-base text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4 }}
                    >{subtitle}</motion.dd>
                </motion.figure>
            </motion.div>
        </Link>
    )
}

export default Menu
