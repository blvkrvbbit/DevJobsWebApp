import { Link } from "react-router";
import type { Job } from "~/types/job.type";
import Card from "../Card/Card";
import cn from "~/utils/cn";

type Props = {
  jobs: Job[] | [];
};

const JobList = ({ jobs }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-[4.9rem] pb-[3.2rem] relative",
        "md:grid-cols-2 md:gap-x-[1.1rem]  md:gap-y-[6.5rem]",
        "lg:grid-cols-3 lg:gap-x-[3rem] lg:mt-[10.5rem]"
      )}
    >
      {jobs.map((job: Job) => (
        <Link key={job.id} to={`/jobs/${job.id}`}>
          <Card job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
