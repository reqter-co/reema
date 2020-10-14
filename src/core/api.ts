import { get, post } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import { LandingPage } from "@Interfaces/landing";
import { ILocale } from "@Interfaces/locale";
import { ICategory } from "@Interfaces/category";
import { ITools } from "@Interfaces/tools";
//=======================================
let token: string = "";
const saveToken = (t: string) => {
  token = t;
};
export const getToken = async () => {
  const response = await post<{ access_token: string }>(
    urls.token,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        clientid,
      },
    }
  );

  if (response && response.parsedBody) {
    saveToken(response.parsedBody.access_token);
    return response.parsedBody;
  }
  return null;
};
const getLandingData = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<LandingPage[]>(urls.landing, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return [];
};
const getAppLocales = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<ILocale[]>(urls.locales, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return [];
};
const getCategories = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<ICategory[]>(urls.categories, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return [];
};
const getTools = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<ITools[]>(urls.tools, {
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    return response.parsedBody;
  }
  return [];
};
const getAllData = async () => {
  if (!token) {
    await getToken();
  }
  const [
    landingPageResponse,
    categoriesResponse,
    toolsResponse,
  ] = await Promise.all([getLandingData(), getCategories(), getTools()]);
  return { landingPageResponse, categoriesResponse, toolsResponse };
};

export { getAppLocales, getAllData, getLandingData, getCategories, getTools };
