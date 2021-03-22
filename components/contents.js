import { useState } from "react"
import SlideOvers from "./slideovers"

const Contents = () => {
    const [showSlide, setShowSlide] = useState(false)

    const toggleShowSlide = () => setShowSlide(true)

    return (
        <div className="mt-10">
            <dl className=" space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative cursor-pointer" onClick={toggleShowSlide}>
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Projects</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Web / Mobile application
                    </dd>
                </div>



                <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6   " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">About</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Experience / Skills / Education
                    </dd>
                </div>

                <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6   " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Labs</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        🚧
                    </dd>
                </div>

                <div className="relative">
                    <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg className="h-6 w-6   " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Contact</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        Email / Github / Facebook
                    </dd>
                </div>
            </dl>
            {
                <SlideOvers show={showSlide} setShowSlide={setShowSlide} />
            }
        </div>
    )
}

export default Contents
