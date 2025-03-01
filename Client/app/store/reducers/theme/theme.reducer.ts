import type { ThemeAction } from "./theme.action";

export interface ThemeState {
  darkMode: boolean;
}

const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
