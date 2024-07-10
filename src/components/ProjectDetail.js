// src/components/ProjectDetail.js

import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { useTranslation } from "react-i18next";

export default function ProjectDetail({ isDarkMode }) {
  const { t, i18n } = useTranslation();
  const { projectId } = useParams();
  const project = projects.find(
    (p) => p.title_fr.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return <div>{projectId} Project not found</div>;
  }

  return (
    <div
      className={`container mx-auto px-5 py-10 ${
        isDarkMode ? "text-gray-400 bg-gray-900" : "text-gray-900 bg-gray-100"
      }`}
    >
      <h1
        className={`title-font text-lg font-medium mb-3 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {i18n.language === "fr" ? project.title_fr : project.title_en}
      </h1>
      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
        {i18n.language === "fr" ? project.subtitle_fr : project.subtitle_en}
      </h2>
      <p className="leading-relaxed">
        {i18n.language === "fr"
          ? project.description_short_fr
          : project.description_short_en}
      </p>
      {/* <img alt="gallery" src={project.image} className="mb-4" /> */}
      {/* <a href={project.link} className="text-indigo-500">
        {project.link}
      </a> */}
    </div>
  );
}
