import { motion } from "framer-motion"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import MotionContainer from "../components/motion_container"

const { ContactSVGPath } = require("../components/svg_path")

const Contact = () => {
    return (
        <MotionContainer>
            <Head>
                <title>Contact</title>
            </Head>

            <Container>
                <TitleBar title='Contact' svgPath={<ContactSVGPath />} />
            </Container>

        </MotionContainer>
    )
}

export default Contact
