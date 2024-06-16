// src/components/Navbar.js

import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import React from "react";
import { useTranslation } from 'react-i18next';

export default function Navbar({ isDarkMode, toggleTheme, changeLanguage }) {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (e) => {
        changeLanguage(e.target.value);
    };

    return (
        <header className={`md:flex top-0 z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className={`ml-3 text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Arthur BARGAS
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className={`mr-5 hover:text-white ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                        {t('navbar.projects')}
                    </a>
                    <a href="#skills" className={`mr-5 hover:text-white ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                        {t('navbar.skills')}
                    </a>
                    <a href="#testimonials" className={`mr-5 hover:text-white ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                        {t('navbar.testimonials')}
                    </a>
                    <a href="#contact" className={`mr-5 hover:text-white ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                        {t('navbar.contact')}
                    </a>
                </nav>
                <button
                     onClick={toggleTheme}
                     className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                 >
                     {isDarkMode ? <SunIcon className="w-4 h-4 text-gray-300" /> : <MoonIcon className="w-4 h-4 text-gray-300" />}
                 </button>
                <div className={`inline-flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'} border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0`}>
                    <select
                        onChange={handleChangeLanguage}
                        defaultValue={i18n.language}
                        className={`${isDarkMode ? 'bg-gray-800' : ' bg-gray-300'} text-white py-1 px-3 rounded`}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div>
            </div>
        </header>
    );
}

