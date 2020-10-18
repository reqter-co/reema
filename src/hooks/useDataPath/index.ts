import { useRouter } from "next/router";
const useDataPath = () => {
  const { query } = useRouter();
  const currentLang = query.lang as string;
  // function getKeyValue<T extends object, U extends string & keyof T>(
  //   object: T,
  //   key: U,
  //   defaultValue: string | number = ""
  // ) {
  function getKeyValue(
    object: any,
    key: string,
    defaultValue: string | number = ""
  ) {
    if (!object) {
      return defaultValue;
    }
    const keys = key.split(".");
    const firstKey = keys[0];
    let val = keys && keys.length ? object[firstKey] : null;
    if (val) {
      if (keys.length > 1) {
        for (let i = 1; i < keys.length; i++) {
          const _key = keys[i];
          if (_key && _key.length && val && val[_key]) {
            val = val[_key];
          }
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
  }
  return {
    getKeyValue,
  };
};

export default useDataPath;
