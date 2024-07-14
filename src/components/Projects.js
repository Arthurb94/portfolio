// src/components/Projects.js

import React from "react";
import { projects } from "../data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CodeIcon } from "@heroicons/react/solid";

export default function Projects({ isDarkMode }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };
  return (
    <section
      id="projects"
      className={`${
        isDarkMode ? "text-gray-400 bg-gray-900" : "text-gray-900 bg-gray-100"
      } body-font`}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("projects.title")}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={project.image}
              className="sm:w-1/3 w-100 p-4 cursor-pointer"
              onClick={() =>
                handleProjectClick(
                  project.title_fr.toLowerCase().replace(/\s+/g, "-")
                )
              }
            >
              <div className="rounded flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div
                  className={`px-8 py-10 relative z-10 w-full border-4 ${
                    isDarkMode
                      ? "border-gray-800 bg-gray-900"
                      : "border-gray-200 bg-gray-100"
                  } opacity-0 hover:opacity-100`}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {i18n.language === "fr"
                      ? project.subtitle_fr
                      : project.subtitle_en}
                  </h2>
                  <h1
                    className={`title-font text-lg font-medium mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {i18n.language === "fr"
                      ? project.title_fr
                      : project.title_en}
                  </h1>
                  <p className="leading-relaxed">
                    {i18n.language === "fr"
                      ? project.description_short_fr
                      : project.description_short_en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
