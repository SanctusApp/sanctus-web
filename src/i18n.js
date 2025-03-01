// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./assets/locales/en.json";
import ptTranslation from "./assets/locales/pt.json";
import esTranslation from "./assets/locales/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
