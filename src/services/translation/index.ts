import i18n from "i18next";
import { setI18n } from "react-i18next";
import detector from "i18next-browser-languagedetector";

export const initTranslation = () => {
  i18n.use(detector).init({
    debug: false,
    detection: {
      order: ["path", "navigator"],
    },
    fallbackLng: "en",
    react: { useSuspense: false },
  });

  // This should be replaced with a proper backend ☝️.
  i18n.addResourceBundle("en", "details", {
    back: "Back",
    ssr_title: "Hello, World from SSR",
    ssg_title: "Hello, World from SSG",
  });
  i18n.addResourceBundle("fa", "empty", {});

  setI18n(i18n);
  return i18n;
};
