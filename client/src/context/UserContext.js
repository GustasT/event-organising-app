import { createContext } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
