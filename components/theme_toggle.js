import { useTheme } from 'next-themes'
import Sun from './sun'
import Moon from './moon'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className='absolute top-0 right-0'>
            <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-3 px-3 rounded-full items-center bg-gray-800 dark:bg-white focus:outline-none"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {
                    theme === 'dark' ? < Sun /> : <Moon />
                }
            </motion.button>
        </div>

    )
}

export default ThemeToggle
