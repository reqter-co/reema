export const initialState = {};

type ActionType = { type: "SET_SEARCH_TERM"; payload: string };

type StateType = typeof initialState;

export function profileReducer(
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
