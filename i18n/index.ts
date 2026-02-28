// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

// import enTranslations from './en.json'
// import hiTranslations from './hi.json'

// i18n
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: {
//                 translation: enTranslations,
//             },
//             hi: {
//                 translation: hiTranslations,
//             },
//         },
//         fallbackLng: 'en',
//         debug: false,
//         interpolation: {
//             escapeValue: false,
//         },
//     })

// export default i18n

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./en.json";
import hiTranslations from "./hi.json";

const isBrowser = typeof window !== "undefined";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            hi: { translation: hiTranslations },
        },
        lng: "en", // default to English for SSR
        fallbackLng: "hi",
        debug: false,
        interpolation: { escapeValue: false },
    });

// run language detector only on client (after hydration)
if (isBrowser) {
    i18n.use(LanguageDetector);
    const savedLang =
        localStorage.getItem("i18nextLng") ||
        navigator.language.split("-")[0] ||
        "en";
    i18n.changeLanguage(savedLang);
}

export default i18n;
