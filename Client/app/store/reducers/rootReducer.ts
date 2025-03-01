import { combineReducers } from "./combineReducers";
import JobReducer from "./job/job.reducer";
import ThemeReducer from "./theme/theme.reducer";
// Types
import { type JobState } from "./job/job.reducer";
import { type ThemeState } from "./theme/theme.reducer";

interface Action<T = any, P = any> {
  type: T;
  payload: P;
}

interface AppState {
  data: JobState;
  theme: ThemeState;
}

const rootReducer = combineReducers<AppState, Action>({
  data: JobReducer,
  theme: ThemeReducer,
});

export { rootReducer };
export type { AppState, Action };
