export enum JobActionTypes {
  FILTER_JOBS_BY_POSITION = "FILTER_JOBS_BY_POSITION",
  FILTER_JOBS_BY_LOCATION = "FILTER_JOBS_BY_LOCATION",
  RESET = "RESET",
}

export type JobAction = {
  type: JobActionTypes;
  payload?: string;
};
