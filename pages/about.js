import { AboutSVGPath } from "../components/svg_path"
import MotionContainer from "../components/motion_container"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"

const About = () => {
    return (
        <MotionContainer>
            <Head>
                <title>About</title>
            </Head>

            <Container>
                <TitleBar title='About' svgPath={<AboutSVGPath />} />
            </Container>

        </MotionContainer>
    )
}

export default About
