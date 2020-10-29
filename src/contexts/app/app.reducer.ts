export const initialState = {
  dir: "ltr",
  lang: "en",
  appLocales: [],
};

type ActionType = { type: "SET_SEARCH_TERM"; payload: string };

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
