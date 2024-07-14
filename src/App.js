// src/App.js

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          changeLanguage={changeLanguage}
        />
        <Routes>
          <Route
            path="/portfolio"
            element={
              <>
                <About isDarkMode={isDarkMode} />
                <Projects isDarkMode={isDarkMode} />
                <Skills isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
              </>
            }
          />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetail isDarkMode={isDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
