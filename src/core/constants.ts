import { PageType, RobotsContent, MetaTags } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";

export const defaultMetaTags: MetaTags = {
  logo:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description:
    "Reema tools is an occasion for you to make your calculations online easily",
  image:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "Reema",
  type: PageType.website,
};

export const clientid = process.env.NEXT_PUBLIC_CLIENT_ID || "";
const baseUrl = "https://requester.reqter.com";
const listLeanUrl = "/api/v1/lists/lean";
export const urls = {
  assetsDownloadBaseUrl: "https://assets.reqter.com/asset/download/",
  imageDownloadBaseUrl: "https://assets.reqter.com/asset/image/download/",
  token: baseUrl + "/api/v1/auth/token",
  locales: baseUrl + "/api/v1/config/locales",
  header: baseUrl + listLeanUrl + "/5f8ae2d356b30d001a1fc5ed",
  footer: baseUrl + listLeanUrl + "/5f8aeb0b56b30d001a1fc5f0",
  landing: baseUrl + listLeanUrl + "/5f8062c056b30d001a1fc56a",
  categories: baseUrl + listLeanUrl + "/5e858a10f0356f001334ba30",
  tools: baseUrl + listLeanUrl + "/5f85885c56b30d001a1fc5b8",
  login: baseUrl + listLeanUrl + "/5f88864b56b30d001a1fc5e5",
  signUpPage: baseUrl + listLeanUrl + "/5f8d72fc56b30d001a1fc603",
};
