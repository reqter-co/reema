export const initialState = {
  dir: "ltr",
  lang: "en",
};

type ActionType =
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_STICKY" }
  | { type: "REMOVE_STICKY" }
  | { type: "SET_SIDEBAR_STICKY" }
  | { type: "REMOVE_SIDEBAR_STICKY" }
  | { type: "TOGGLE_DRAWER" };

type StateType = typeof initialState;

export function appReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
