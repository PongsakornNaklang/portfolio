import { motion } from "framer-motion"
import Image from "next/image"

const ProjectCard = () => {
    return (
        <div
            className=' bg-blue-gray-900 rounded-3xl pt-4 pr-4 pb-4 pl-4'
            style={{ maxWidth: 900, height: '66vh' }}
        >
            <Image src='/images/Screen.png' height={300} width={400} />
        </div>
    )
}

export default ProjectCard
