// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traductions pour l'anglais et le français
const resources = {
    en: {
        translation: {
            navbar: {
                home: "Home",
                projects: "Projects",
                skills: "Skills",
                testimonials: "Testimonials",
                contact: "Contact",
                hireMe: "Hire Me"
            },
            about: {
                title: "Hello Team",
                subtitle: "Rikitoubinks",
                description: "This is a sample paragraph.",
                contactButton: "Get in Touch",
                projectButton: "See My Projects"
            },
            // Ajoutez les autres traductions pour vos autres composants
        }
    },
    fr: {
        translation: {
            navbar: {
                home: "Accueil",
                projects: "Projets",
                skills: "Compétences",
                testimonials: "Témoignages",
                contact: "Contact",
                hireMe: "Engagez-moi"
            },
            about: {
                title: "Bonjour la team",
                subtitle: "Rikitoubinks",
                description: "Ceci est un paragraphe exemple.",
                contactButton: "Prendre contact",
                projectButton: "Voir mes projets"
            },
            // Ajoutez les autres traductions pour vos autres composants
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
