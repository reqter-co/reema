import useGlobalState from "@Hooks/useGlobal/useGlobalState";
import { i18n } from "../../../i18n";
const useTranslation = () => {
  const { dir } = useGlobalState();
  return {
    direction: dir,
    currentLang: i18n.language,
  };
};

export default useTranslation;
