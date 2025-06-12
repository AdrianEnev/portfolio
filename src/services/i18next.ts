import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import bg from "./bg.json";

const languageResources = {
    en: {
      translation: en,
    },
    bg: {
      translation: bg,
    }
};

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: "en",
        fallbackLng: "bg",
        resources: languageResources
    });

export default i18next;