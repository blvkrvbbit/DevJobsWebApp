import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context)
    throw new Error("useCounter must be used within a CounterProvider");
  return context;
};
