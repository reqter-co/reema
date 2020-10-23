import { useCreateContext } from "../create-context";
import { profileReducer, initialState } from "./profile.reducer";

const [state, dispatch, provider] = useCreateContext<any, any>(
  profileReducer,
  initialState
);
export const useProfileState = state;
export const useProfileDispatch = dispatch;
export const ProfileProvider = provider;
