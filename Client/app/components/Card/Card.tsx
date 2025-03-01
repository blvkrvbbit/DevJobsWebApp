// import { useStore } from "~/context/StoreContext";
import type { Job } from "~/types/job.type";
import cn from "~/utils/cn";

type Props = {
  job: Job;
};

const Card = ({ job }: Props) => {
  // const { state } = useStore();
  return (
    <div
      className={cn(
        "relative px-[3.2rem] pt-[4.9rem] pb-[3.3rem] rounded-[0.6rem] bg-white"
        // state.theme.mode === "dark" ? "bg-very-dark-blue" : "bg-white"
      )}
    >
      <div
        style={{
          background: job.logoBackground,
        }}
        className={cn(
          "w-[5rem] h-[5rem] flex items-center justify-center rounded-[1.5rem]",
          "absolute top-[-2.5rem]"
        )}
      >
        <img src={`${job.logo.slice(1, job.logo.length)}`} alt="" />
      </div>
      <div className="flex items-center gap-[1.2rem] text-dark-grey mb-[1.3rem]">
        <p>{job.postedAt}</p>
        <div className="bg-dark-grey w-[0.4rem] h-[0.4rem] rounded-full"></div>
        <p>{job.contract}</p>
      </div>
      <h3
        className={cn(
          "mb-[1.7rem]"
          // state.theme.mode === "dark" && "text-white"
        )}
      >
        {job.position}
      </h3>
      <p className="text-dark-grey mb-[4rem]">{job.company}</p>
      <h4 className="text-violet">{job.location}</h4>
    </div>
  );
};

export default Card;
