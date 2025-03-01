import {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from "react";

import { rootReducer } from "./reducers/rootReducer";
import type { AppState, Action } from "./reducers/rootReducer";
import jobs from "../data.json";

const initialState: AppState = {
  data: {
    jobs: jobs,
  },
  theme: {
    darkMode: false,
  },
};

const StoreContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => {},
});

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
