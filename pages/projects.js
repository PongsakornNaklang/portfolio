import Head from "next/head"
import { motion } from "framer-motion"
import Container from "../components/container"
import { useRouter } from 'next/router'
import ProjectCard from "../components/project_card"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Keyboard, Mousewheel } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import MotionContainer from "../components/motion_container"
import TitleBar from "../components/title_bar"
import { ProjectSVGPath } from "../components/svg_path"

SwiperCore.use([EffectCoverflow, Keyboard, Mousewheel])

const Projects = () => {
    const router = useRouter()
    return (
        <MotionContainer>
            <Head>
                <title>Hello Projects</title>
            </Head>

            <Container>
                <TitleBar title='Projects' svgPath={<ProjectSVGPath />} />
            </Container>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [0.8, 1] }}
                transition={{ delay: 1.9, duration: 0.2 }}
            >
                <Swiper
                    className='w-full pt-10 pb-10'
                    effect='coverflow'
                    spaceBetween={30}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: false,
                    }}
                    mousewheel={{
                        invert: true,
                    }}
                >
                    <SwiperSlide className='rounded-3xl ' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard />
                    </SwiperSlide>
                </Swiper>
            </motion.div>

        </MotionContainer>
    )
}

export default Projects
