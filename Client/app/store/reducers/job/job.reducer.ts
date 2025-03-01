import type { Job } from "~/types/job.type";
import jobs from "../../../data.json";
import type { JobAction } from "./job.action";

export interface JobState {
  jobs: Job[] | [];
}


const JobReducer = (state: JobState, action: JobAction): JobState => {
  switch (action.type) {
    case "FILTER_JOBS_BY_POSITION":
      return {
        jobs: state.jobs.filter((job) =>
          job.position.toLowerCase().includes(action.payload!.toLowerCase())
        ),
      };
    case "FILTER_JOBS_BY_LOCATION":
      return {
        jobs: state.jobs.filter((job) =>
          job.location.toLowerCase().includes(action.payload!.toLowerCase())
        ),
      };
    case "RESET":
      return {
        jobs: jobs,
      };
    default:
      return state;
  }
};

export default JobReducer;
