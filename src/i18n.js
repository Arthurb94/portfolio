// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traductions pour l'anglais et le français
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        hireMe: "Hire Me",
        profile: "Profile",
      },
      about: {
        title: "Hi, I'm Arthur BARGAS",
        subtitle: "Junior Data Scientist",
        description: "",
        contactButton: "Get in Touch",
        profileButton: "My Profile",
      },
      contact: {
        name: "Name",
        address: "ADDRESS",
        email: "EMAIL",
        phone: "PHONE",
        contact: "Hire Me",
        contact_text:
          "If you like my profile and would like to work with me, please don't hesitate to contact me.",
        submit: "Submit",
      },
      skills: {
        title: "Skills",
        description: "",
        list: ["Python", "Artificial intelligence", "C", "binks"],
      },
      projects: {
        title: "Projects I realized",
        description: "Projects that I realized.",
      },
      // Ajoutez les autres traductions pour vos autres composants
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        projects: "Projets",
        skills: "Compétences",
        contact: "Contact",
        hireMe: "Engagez-moi",
        profile: "Profil",
      },
      about: {
        title: "Bonjour, moi c'est Arthur",
        subtitle: "Je suis data scientist junior",
        description: "",
        contactButton: "Prendre contact",
        profileButton: "Mon Profil",
      },
      contact: {
        name: "Nom",
        address: "ADRESSE",
        email: "EMAIL",
        phone: "TÉLÉPHONE",
        contact: "Contactez moi",
        contact_text:
          "Si mon profil vous intéresse et que vous souhaitez travailler avec moi, n'hésitez pas à me contacter !",
        submit: "Soumettre",
      },
      skills: {
        title: "Compétences",
        list: [
          "Python",
          "Javascript",
          "HTML / CSS",
          "AWS",
          "Docker",
          "Git / Github",
          "Matlab",
          "Intelligence artificielle",
        ],
      },
      projects: {
        title: "Projets réalisés",
        description: "Exemples de projets que j'ai pu réaliser.",
      },

      // Ajoutez les autres traductions pour vos autres composants
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
