import { useTheme } from 'next-themes'
import Sun from './sun'
import Moon from './moon'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div className='fixed bottom-10 right-10 rounded-full shadow-2xl z-10'>
            <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="py-4 px-4  items-center rounded-full bg-gray-800 dark:bg-white focus:outline-none"
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
