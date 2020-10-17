import { PageType, RobotsContent, MetaTags } from "@Interfaces/meta-tags";
import { concatenateStrings } from "@Shared/helper";

export const defaultMetaTags: MetaTags = {
  logo:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description:
    "Whatever you need related to frontend specially react tutorial - your favorite articles",
  image:
    "https://blog.mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png",
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: "Reema",
  type: PageType.website,
};

export const clientid = "3f33b7b9-3826-475a-993e-c1b6c12b41bc";
const baseUrl = "https://requester.reqter.com";
const listLeanUrl = "/api/v1/lists/lean";
export const urls = {
  token: baseUrl + "/api/v1/auth/token",
  locales: baseUrl + "/api/v1/config/locales",
  header: baseUrl + listLeanUrl + "/5f8ae2d356b30d001a1fc5ed",
  footer: baseUrl + listLeanUrl + "/5f8aeb0b56b30d001a1fc5f0",
  landing: baseUrl + listLeanUrl + "/5f8062c056b30d001a1fc56a",
  categories: baseUrl + listLeanUrl + "/5e858a10f0356f001334ba30",
  tools: baseUrl + listLeanUrl + "/5f85885c56b30d001a1fc5b8",
  login: baseUrl + listLeanUrl + "/5f88864b56b30d001a1fc5e5",
};
