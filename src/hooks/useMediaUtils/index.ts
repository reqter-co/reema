import { urls } from "@Core/constants";
import useTranslation from "@Hooks/useTranslation";

const useMediaUtils = () => {
  const { currentLang } = useTranslation();
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
      const image = media[0] as { [key: string]: string };
      return makeImageUrl(image[currentLang]) as string;
    }
    return "";
  };
  return { getMediaValue, makeMediaUrl };
};

export default useMediaUtils;
