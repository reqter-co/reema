import { useRouter } from "next/router";
import { useLanguageState } from "@Contexts/language/language.provider";
const useLanguage = () => {
  const { locale, defaultLocale } = useRouter();
  const appLocales = useLanguageState("appLocales");

  return {
    direction: isRTL(locale) ? "rtl" : "ltr",
    currentLocale: locale,
    defaultLocale,
    appLocales,
  };
};

export default useLanguage;

const rtlLangs = [
  "fa",
  "ar",
  "Aramaic",
  "Azeri",
  "Dhivehi/Maldivian",
  "Hebrew",
  "Kurdish (Sorani)",
  "Urdu",
];
export const isRTL = (lang?: string): boolean => {
  return lang ? rtlLangs.includes(lang) : false;
};
