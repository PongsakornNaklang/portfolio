import MotionContainer from "../components/motion_container"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import { LabSVGPath } from "../components/svg_path"

const Labs = () => {
    return (
        <MotionContainer>
            <Head>
                <title>Labs</title>
            </Head>

            <Container>
                <TitleBar title='Labs' svgPath={<LabSVGPath />} />
            </Container>

        </MotionContainer>
    )
}

export default Labs
