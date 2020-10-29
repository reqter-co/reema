import Cookies from "js-cookie";
// mock the user api
const getUser = async () => {
  // sleep 500
  await new Promise((res) => setTimeout(res, 500));
  const token = Cookies.get("reema_access_token");
  if (token) {
    // authorized
    return {
      name: "Saeed Padyab",
      avatar: "https://github.com/shuding.png",
    };
  }

  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};

export default getUser;
