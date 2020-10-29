import { useCreateContext } from "../create-context";
import { languageReducer, initialState } from "./language.reducer";

const [state, dispatch, provider] = useCreateContext<any, any>(
  languageReducer,
  initialState
);
export const useLanguageState = state;
export const useLanguageDispatch = dispatch;
export const LanguageProvider = provider;
