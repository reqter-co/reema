import React, { useContext, createContext } from "react";

export function useCreateContext<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;
  const stateCtx = createContext(initialState);
  const dispatchCtx = createContext(defaultDispatch);

  function useStateCtx<K extends keyof StateType>(property: K) {
    const state = useContext(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  function Provider(
    props: React.PropsWithChildren<{ data?: { [key: string]: unknown } }>
  ) {
    const [state, dispatch] = React.useReducer<
      React.Reducer<StateType, ActionType>
    >(reducer, { ...initialState, ...props.data });
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }

  return [useStateCtx, useDispatchCtx, Provider] as const;
}
