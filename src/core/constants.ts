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
  landing: baseUrl + listLeanUrl + "/5f8062c056b30d001a1fc56a",
  token: baseUrl + "/api/v1/auth/token",
  locales: baseUrl + "/api/v1/config/locales",
};
