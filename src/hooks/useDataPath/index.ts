import { useRouter } from "next/router";
const useDataPath = () => {
  const { query } = useRouter();
  const currentLang = query.lang as string;
  const getValue = (
    object: any,
    key: string,
    defaultValue: string | number = ""
  ) => {
    if (!object) {
      return defaultValue;
    }
    const keys = key.split(".");
    let val = object[keys[0]];
    if (val) {
      if (keys.length > 1) {
        for (let i = 1; i < keys.length; i++) {
          if (keys[i] && keys[i].length && val && val[keys[i]])
            val = val[keys[i]];
        }
      }
    }
    const r = val
      ? Array.isArray(val)
        ? val
        : typeof val === "object"
        ? val[currentLang]
          ? val[currentLang]
          : defaultValue
        : val
      : defaultValue;

    return r;
  };
  return {
    getValue,
  };
};

export default useDataPath;
