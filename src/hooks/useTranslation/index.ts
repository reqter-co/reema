import useGlobalState from "@Hooks/useGlobal/useGlobalState";
const useTranslation = () => {
  const { dir, lang } = useGlobalState();
  return {
    direction: dir,
    currentLang: lang,
  };
};

export default useTranslation;
