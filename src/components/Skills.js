// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Skills({ isDarkMode }) {
  const { t } = useTranslation();

  // Récupère la liste des compétences depuis les traductions
  const skillsList = t("skills.list", { returnObjects: true });

  return (
    <section
      id="skills"
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("skills.title")}
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsList.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/4 w-full">
              <div
                className={`${
                  isDarkMode ? "bg-gray-800" : "bg-gray-200"
                } rounded flex p-4 h-full items-center`}
              >
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span
                  className={`title-font font-medium ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
