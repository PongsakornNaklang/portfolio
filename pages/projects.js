import Head from "next/head"
import { motion } from "framer-motion"
import Container from "../components/container"
import { useRouter } from 'next/router'
import ProjectCard from "../components/project_card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Projects = () => {
    const router = useRouter()
    return (
        <motion.div
            layoutId={`projects-svg-box`}
            className='bg-indigo-500 h-screen w-screen pt-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <Head>
                <title>Hello Projects</title>
            </Head>

            <Container>

                <div className='inline-flex w-full'>
                    <motion.figure
                        className='h-16 w-16 justify-start'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <motion.button
                            className="py-4 px-4 rounded-full items-center bg-indigo-900 text-white focus:outline-none"
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => router.push('/')}
                        >
                            <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </motion.button>
                    </motion.figure>

                    <div className='flex inline-flex justify-end h-18 w-full items-center '>
                        <motion.svg
                            layoutId={`projects-svg`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-8 w-8 text-white `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </motion.svg>

                        <motion.p
                            layoutId={`projects-title`}
                            className="ml-6 text-3xl leading-3 font-medium text-white "
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Projects
                    </motion.p>
                    </div>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectCard />
                    </SwiperSlide>
                </Swiper>


            </Container>

        </motion.div>
    )
}

export default Projects
