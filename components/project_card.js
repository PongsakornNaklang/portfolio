import { motion } from "framer-motion"

const ProjectCard = () => {
    return (
        <motion.div
            className='h-96 max-w-full bg-white rounded-3xl mt-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0.9, 1] }}
            transition={{ delay: 1.9, duration: 0.5 }}
        >

        </motion.div>
    )
}

export default ProjectCard
