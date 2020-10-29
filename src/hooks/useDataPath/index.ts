import useLanguage from "@Hooks/useLanguage";

const useDataPath = () => {
  const { defaultLocale, currentLocale } = useLanguage();

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
        ? currentLocale && val[currentLocale]
          ? val[currentLocale]
          : defaultLocale && val[defaultLocale]
          ? val[defaultLocale]
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
