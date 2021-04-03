import MotionContainer from "../components/motion_container"
import Head from "next/head"
import Image from "next/image"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import SvgPath from "../components/svg_path"
import ThemeToggle from "../components/theme_toggle"
import LabCard from "../components/lab_card"
import { motion } from "framer-motion"

const Labs = () => {
    return (
        <MotionContainer path='labs'>
            <Head>
                <title>Labs</title>
            </Head>
            <ThemeToggle />
            <Container>
                <TitleBar title='Labs' svgPath={SvgPath.lab} />
                <motion.div
                    className="flex flex-row flex-wrap p-8 overflow-visible place-content-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [0.8, 1] }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                >
                    <LabCard />
                </motion.div>
            </Container>

        </MotionContainer>
    )
}

export default Labs
