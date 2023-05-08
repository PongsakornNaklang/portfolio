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
                                    <li>Develop service application for telephone network provider</li>
                                    <li>Develop with Express.js </li>
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
                            <a href='https://github.com/PongsakornNaklang/' target='_blank' className="inline-flex w-fit mr-4">
                                <svg className='dark:bg-white p-0.5 rounded-3xl' xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="30" height="30" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 250">
                                    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z" fill="#161614" />
                                </svg>
                            </a>
                            <a href='mailto:pongsakornnaklang@gmail.com' target='_blank' className="inline-flex w-fit mr-4">
                                <Image
                                    priority
                                    src="/images/gmail.svg"
                                    height={30}
                                    width={30}
                                    alt="pongsakornnaklang@gmail.com"
                                />
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>

        </motion.div>
    )
}

export default Contents