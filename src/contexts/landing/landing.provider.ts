import { useCreateContext } from "../create-context";
import { landingReducer, initialState } from "./landing.reducer";

const [state, dispatch, provider] = useCreateContext<any, any>(
  landingReducer,
  initialState
);
export const useLandingState = state;
export const useLandingDispatch = dispatch;
export const LandingProvider = provider;
