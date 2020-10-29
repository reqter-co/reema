import { get, post } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import { LandingPage } from "@Interfaces/landing";
import { ILogin } from "@Interfaces/login";
import { ISignUpPage } from "@Interfaces/signupPage";
import { ILocale } from "@Interfaces/locale";
import { ICategory } from "@Interfaces/category";
import { ITools } from "@Interfaces/tools";
import { IHeader } from "@Interfaces/header";
import { IFooter } from "@Interfaces/footer";
//============================================================
let token: string = "";
let result: any = {};
const saveToken = (t: string) => {
  token = t;
};
const saveResult = (key: string, value: any) => {
  result[key] = value;
};
// =====================================================
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
const getHeaderData = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<IHeader[]>(urls.header, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    const header =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody[0]
        : {};
    return header;
  }
  return [];
};
const getFooterData = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<IFooter[]>(urls.footer, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    const footer =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody[0]
        : {};
    return footer;
  }
  return {};
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
    const landing =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody[0]
        : {};
    return landing;
  }
  return [];
};
const getLoginData = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<ILogin[]>(urls.login, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    const obj =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody[0]
        : {};
    return obj;
  }
  return [];
};
const getSignUpData = async () => {
  if (!token) {
    await getToken();
  }
  const response = await get<ISignUpPage[]>(urls.signUpPage, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + token,
    },
  });
  if (response && response.parsedBody) {
    const obj =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody[0]
        : {};
    return obj;
  }
  return [];
};
const getAppLocales = async () => {
  if (result && result["locales"]) {
    return result["locales"];
  }
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
    const langs =
      response.parsedBody && response.parsedBody.length
        ? response.parsedBody
        : [{ locale: "en" }, { locale: "fa" }];
    saveResult("locales", langs);
    return langs;
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
const getLandingPageData = async () => {
  if (!token) {
    await getToken();
  }
  const [
    appLocales,
    headerData,
    footerData,
    landingPageResponse,
    categoriesResponse,
    toolsResponse,
  ] = await Promise.all([
    getAppLocales(),
    getHeaderData(),
    getFooterData(),
    getLandingData(),
    getCategories(),
    getTools(),
  ]);
  return {
    appLocales,
    headerData,
    footerData,
    landingPageResponse,
    categoriesResponse,
    toolsResponse,
  };
};
const getLoginPageData = async () => {
  if (!token) {
    await getToken();
  }
  const [appLocales, loginPage] = await Promise.all([
    getAppLocales(),
    getLoginData(),
  ]);

  return { appLocales, loginPage };
};
const getSignUpPageData = async () => {
  if (!token) {
    await getToken();
  }
  const [appLocales, signupPage] = await Promise.all([
    getAppLocales(),
    getSignUpData(),
  ]);

  return { appLocales, signupPage };
};

const getProfilePageData = async () => {
  if (!token) {
    await getToken();
  }
  const [appLocales, headerData, footerData] = await Promise.all([
    getAppLocales(),
    getHeaderData(),
    getFooterData(),
  ]);
  return {
    appLocales,
    headerData,
    footerData,
  };
};
export {
  getAppLocales,
  getLandingPageData,
  getLandingData,
  getCategories,
  getTools,
  getLoginPageData,
  getSignUpPageData,
  getProfilePageData,
};
