import { useCreateContext } from "../create-context";
import { authReducer, INITIAL_STATE } from "./auth.reducer";

const [state, dispatch, provider] = useCreateContext<any, any>(
  authReducer,
  INITIAL_STATE
);
export const useAuthState = state;
export const useAuthDispatch = dispatch;
export const AuthProvider = provider;
