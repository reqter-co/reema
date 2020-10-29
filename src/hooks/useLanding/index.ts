import { useLandingState } from "@Contexts/landing/landing.provider";
const useLanding = () => {
  const landingPage = useLandingState("landingPage");
  const categories = useLandingState("categories");
  const tools = useLandingState("tools");
  return {
    landingPage,
    categories,
    tools,
  };
};

export default useLanding;
