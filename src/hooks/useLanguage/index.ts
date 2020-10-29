import { useRouter } from "next/router";
import { useLanguageState } from "@Contexts/language/language.provider";
const useLanguage = () => {
  const { locale, defaultLocale } = useRouter();
  const appLocales = useLanguageState("appLocales");

  const q = locale;
  return {
    direction: q === "fa" || q === "ar" ? "rtl" : "ltr",
    currentLang: q as string,
    defaultLocale,
    appLocales,
  };
};

export default useLanguage;
