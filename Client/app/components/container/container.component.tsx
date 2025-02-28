import type { ReactNode } from "react";
import cn from "~/utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "container px-7 md:p-0 lg:max-w-[111rem] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
