import { get, post } from "@Utils/http";
import { clientid, urls } from "@Core/constants";
import { LandingPage } from "@Interfaces/landing";
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

export { getLandingData };
