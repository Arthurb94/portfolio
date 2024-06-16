// src/components/About.js

import developer from '../assets/developer.png'
import developer_dark from '../assets/developer-dark.png'

export default function About({ isDarkMode }) {
    return (
        <section id="about" className={`${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-900'}`}>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Hello la team
                    </h1>
                    <h2 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Cela est un sous titre
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        lalala le paragraphe la
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flew text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Boom prend mon 06 bg
                        </a>
                        <a
                            href="#projects"
                            className={`ml-4 inline-flex ${isDarkMode ? 'text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white' : 'text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-gray-900'} border-0 py-2 px-6 focus:outline-none rounded text-lg`}>
                            Link to les projet la
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="developer"
                        src={developer_dark}
                    />
                </div>
            </div>
        </section>
    );
}
