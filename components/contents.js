import { motion } from "framer-motion"
import Image from 'next/image';

const Contents = () => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-700 shadow rounded-lg mt-4 overflow-auto"
            style={{ maxHeight: '90vh' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: [0.8, 1] }}
            transition={{ delay: 0.5, duration: 0.3 }}
        >
            <div className="">
                <dl>
                    <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium  text-indigo-600 dark:text-red-accent-100">Intro</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-5 space-y-4">
                            <p className="indent-16">I'm a junior software developer who genuinely passionate about coding 🤓. I have keen interest in software architecture and also enjoy web developing 😊. I'm seeking out new challenges and willing to learn new things ✨. 
                            </p>
                        </dd>
                    </div>
                    <div className="bg-white dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium  text-indigo-600 dark:text-red-accent-100">Experience</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-5 space-y-4">
                            <div>
                                <p>May 2021 – Apr 2022, Entronica Co., Ltd., Bangkok, Software developer</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    <li>Develop a microservice for AIS mobile services.</li>
                                    <li>Develop with Express.js and Oracle database.</li>
                                </ul>
                            </div>
                            <div>
                                <p>Jul – Nov 2020, Seagate Technology (Thailand) Ltd., Nakhon Ratchasima, Intern Programmer</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                    <li>Build and develop application help business archive a goal, focus on real time streaming data platform.</li>
                                    <li>Develop with  python / flask framework / react.js  </li>
                                </ul>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium  text-indigo-600 dark:text-red-accent-100">Education</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-5 space-y-4">
                            <p>2017 – 2021, Suranaree University of Technology, Nakhon Ratchasima</p>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                                <li>Bachelor of Information Science (Enterprise Software)</li>
                                <li>With GPAX 3.22</li>
                            </ul>
                        </dd>
                    </div>
                    <div className="bg-white dark:bg-gray-600 px-4 py-5 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium  text-indigo-600 dark:text-red-accent-100">Contact</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-5">
                            <a href='mailto:pongsakornnaklang@gmail.com' target='_blank' className="inline-flex w-fit mr-4 items-center">
                                <Image
                                    priority
                                    src="/images/gmail.svg"
                                    height={30}
                                    width={30}
                                    alt="pongsakornnaklang@gmail.com"
                                />
                                <span>&nbsp;&nbsp;</span>
                                pongsakornnaklang@gmail.com
                            </a>
                            
                        </dd>
                    </div>
                </dl>
            </div>

        </motion.div>
    )
}

export default Contents