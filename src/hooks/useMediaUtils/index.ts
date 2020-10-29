import { urls } from "@Core/constants";
import useLanguage from "@Hooks/useLanguage";

const useMediaUtils = () => {
  const { currentLocale, defaultLocale } = useLanguage();
  const makeImageUrl = (
    url: string,
    width?: string | number,
    height?: string | number
  ) => {
    if (!url || !url.length) return null;
    let newUrl: string = "";
    if (url.startsWith(urls.assetsDownloadBaseUrl)) {
      url = url.replace(urls.assetsDownloadBaseUrl, urls.imageDownloadBaseUrl);
    }
    if (url.startsWith(urls.imageDownloadBaseUrl)) newUrl = url;
    else newUrl = urls.imageDownloadBaseUrl + url;
    if (width && height) {
      return (newUrl = url + `?w=${width}&h=${height}`);
    }
    return newUrl;
  };
  const makeMediaUrl = (src: string) => {
    let url: string;
    if (src.startsWith(urls.assetsDownloadBaseUrl)) url = src;
    else url = urls.assetsDownloadBaseUrl + src;
    return url;
  };
  const getMediaValue = (
    media: { [key: string]: string }[],
    type: string
  ): string => {
    if (media && media.length && type === "image") {
      const firstImgObj = media[0] as { [key: string]: string };
      const imageUrl =
        currentLocale && firstImgObj[currentLocale]
          ? firstImgObj[currentLocale]
          : defaultLocale
          ? firstImgObj[defaultLocale]
          : "";
      return makeImageUrl(imageUrl) as string;
    }
    return "";
  };
  return { getMediaValue, makeMediaUrl };
};

export default useMediaUtils;
