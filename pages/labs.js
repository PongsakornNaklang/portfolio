import MotionContainer from "../components/motion_container"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import { LabSVGPath } from "../components/svg_path"
import ThemeToggle from "../components/theme_toggle"

const Labs = () => {
    return (
        <MotionContainer path='labs'>
            <Head>
                <title>Labs</title>
            </Head>
            <ThemeToggle />
            <Container>
                <TitleBar title='Labs' svgPath={<LabSVGPath />} />
            </Container>

        </MotionContainer>
    )
}

export default Labs
