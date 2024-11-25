import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationsEN from "./en/en.json";
import translationsAM from "./am/am.json";

const resources = {
  en: {
    translation: translationsEN,
  },
  am: {
    translation: translationsAM,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false, // we do not use keys in form messages.welcome
    fallbackLng: "am", // Fall back to English when no supported locale found
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
