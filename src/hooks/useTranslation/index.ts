import useGlobalState from "@Hooks/useGlobal/useGlobalState";
const useTranslation = () => {
  const { dir } = useGlobalState();
  return {
    direction: dir,
    currentLang: "en",
  };
};

export default useTranslation;
