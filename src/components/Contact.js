// src/components/Contact.js

import React from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact({ isDarkMode }) {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("mbjnnwav");
  if (state.succeeded) {
    return (
      <p
        className={`title-font font-semibold tracking-widest text-xs mt-4 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Thanks for joining!
      </p>
    );
  }

  return (
    <section
      id="contact"
      className={`relative ${
        isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-900"
      }`}
    >
      <hr className="lg:w-4/5 py-5 mx-auto flex-wrap" />

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          className={`lg:w-2/3 md:w-1/2 ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          } rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}
        >
          <iframe
            width="100%"
            height="100%"
            title="Map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=sucy+en+brie&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div
            className={`relative flex flex-wrap py-2 rounded shadow-md ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="lg:w-3/4 px-6 mt-4 lg:mt-0">
              <h2
                className={`title-font font-semibold tracking-widest text-xs ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t("contact.email")}
              </h2>
              <a href="email" className="text-indigo-400 leading-relaxed">
                arthurbargas.pro@gmail.com
              </a>
              <h2
                className={`title-font font-semibold tracking-widest text-xs mt-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t("contact.phone")}
              </h2>
              <p className="leading-relaxed">+33 6 95 65 20 83</p>
            </div>
          </div>
        </div>

        <form
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2
            className={`sm:text-4xl text-3xl mb-1 font-medium title-font ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("contact.contact")}
          </h2>
          <p className="leading-relaxed mb-5">{t("contact.contact_text")}</p>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className={`leading-7 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-100"
                  : "bg-gray-200 border-gray-300 text-gray-900"
              } rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className={`leading-7 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-100"
                  : "bg-gray-200 border-gray-300 text-gray-900"
              } rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            disabled={state.submitting}
          >
            {t("contact.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
