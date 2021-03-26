import { AboutSVGPath } from "../components/svg_path"
import MotionContainer from "../components/motion_container"
import Head from "next/head"
import Container from "../components/container"
import TitleBar from "../components/title_bar"
import { motion } from "framer-motion"

const About = () => {
    return (
        <MotionContainer path='about'>
            <Head>
                <title>About</title>
            </Head>

            <Container>
                <TitleBar title='About' svgPath={<AboutSVGPath />} />

                <motion.div
                    className="bg-white shadow rounded-lg mt-4 overflow-auto"
                    style={{ maxHeight: '70vh' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [0.8, 1] }}
                    transition={{ delay: 1.5, duration: 0.3 }}
                >
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Full name </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Pongsakorn Naklang (Bank)</dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Interests</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Machine learning, Internet of Things and Music
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Skills</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-y-4">
                                    <div >
                                        <p>Framework / Library</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>React, React native, Next.js, Flask, Node.js, Express.js</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>Programming language</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>JavaScript, Python, Java, C++</li>
                                        </ul>
                                    </div>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Experience</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-y-4">
                                    <div>
                                        <p>July – Nov. 2020, Seagate Technology (Thailand) Ltd., Nakhon Ratchasima, Programmer</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>Build and develop application help business archive a goal, focus on real time streaming data platform.</li>
                                        </ul>
                                    </div>

                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Education</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 space-y-4">
                                    <div>
                                        <p>2017 – 2021, Suranaree University of Technology, Nakhon Ratchasima</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>Bachelor of Information Science (Enterprise Software)</li>
                                            <li>with GPAX 3.22</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>2012 – 2017, Khamsakaesaeng High School, Nakhon Ratchasima</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>Mathematics-Science Programme</li>
                                        </ul>
                                    </div>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                                                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-2 flex-1 w-0 truncate">resume.pdf</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href='/api/resume/download' className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                                            </div>
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                    </div>

                </motion.div>
            </Container>
        </MotionContainer >
    )
}

export default About
