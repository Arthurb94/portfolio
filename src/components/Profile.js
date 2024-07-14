// src/components/Profile.js

import { useTranslation } from "react-i18next";

export default function Profile({ isDarkMode }) {
  const { t } = useTranslation();
  return (
    <section
      id="profile"
      className={`relative ${
        isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"></div>
    </section>
  );
}
