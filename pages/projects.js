import Head from "next/head"
import { motion } from "framer-motion"
import Container from "../components/container"
import { useRouter } from 'next/router'
import ProjectCard from "../components/project_card"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Keyboard, Mousewheel, Pagination } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import MotionContainer from "../components/motion_container"
import TitleBar from "../components/title_bar"
import { ProjectSVGPath } from "../components/svg_path"

SwiperCore.use([EffectCoverflow, Keyboard, Mousewheel, Pagination])

const Projects = () => {
    const router = useRouter()
    return (
        <MotionContainer path='projects'>
            <Head>
                <title>Projects</title>
            </Head>

            <Container>
                <TitleBar title='Projects' svgPath={<ProjectSVGPath />} />
            </Container>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [0.8, 1] }}
                transition={{ delay: 1.5, duration: 0.3 }}
            >
                <Swiper
                    className='w-full pt-10 pb-10'
                    effect='coverflow'
                    spaceBetween={30}
                    loop={true}
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
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'fraction',
                    }}
                >
                    <SwiperSlide className='rounded-3xl ' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard
                            name='Portfolio'
                            desc='Website to show my skills and use them to apply for jobs'
                            coverSrc='/images/Screen.png'
                            link='https://portfolio-git-main-pongsakornnaklang.vercel.app/'
                            techStack={['Next.js', 'Tailwind CSS', 'Framer']}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard
                            name='SUT E-Project'
                            desc='Web application for managing software projects between students and professors; stores project files for analysis and query purposes'
                            coverSrc='/images/e-project.png'
                            link='http://it2.sut.ac.th/project63_g40/'
                            techStack={['React.js', 'Ant design', 'Express', 'mysql']}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard
                            name='AppsLimiter'
                            desc='For limiting the use of mobile applications so as not to interfere with other activities'
                            coverSrc='/images/AppsLimiter.png'
                            link='https://github.com/PongsakornNaklang/AppsLimiter'
                            techStack={['Java']}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard
                            name='Atmosphere (Dust detecter)'
                            desc='For detecting dust around IoT devices and alarming when the dust density is dangerous'
                            coverSrc='/images/Atmosphere.png'
                            link='https://github.com/PongsakornNaklang/Atmosphere-mobile'
                            techStack={['Java', 'C++', 'esp8266', 'GP2Y1010AU0F', 'Firebase Realtime Database']}
                        />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-3xl' style={{ maxWidth: 900, height: '66vh' }}>
                        <ProjectCard
                            name='SUT Sport and Health Center'
                            desc='Support the user experience of using sport and health center at Suranaree University of Technology'
                            coverSrc='/images/SUT_Sport_and_Health_Center.png'
                            link='http://student.sut.ac.th/b6074562/SUT_SportAndHealthCenter/'
                            techStack={['PHP', 'HTML', 'CSS']}
                        />
                    </SwiperSlide>

                    <div className="swiper-pagination text-center mt-6 text-white text-base"></div>
                </Swiper>
            </motion.div>
        </MotionContainer>
    )
}

export default Projects
