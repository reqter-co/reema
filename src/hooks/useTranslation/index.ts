import { useRouter } from "next/router";
const useTranslation = () => {
  const { query } = useRouter();
  return {
    direction: query.lang === "fa" || query.lang === "ar" ? "rtl" : "ltr",
    currentLang: query.lang,
  };
};

export default useTranslation;
