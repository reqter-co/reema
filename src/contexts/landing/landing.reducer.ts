export const initialState = {};

type ActionType =
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "SET_STICKY" }
  | { type: "REMOVE_STICKY" }
  | { type: "SET_SIDEBAR_STICKY" }
  | { type: "REMOVE_SIDEBAR_STICKY" }
  | { type: "TOGGLE_DRAWER" };

type StateType = typeof initialState;

export function landingReducer(
  state: StateType,
  action: ActionType
): StateType {
  switch (action.type) {
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
