import React from "react";
import { UserList } from "../components/users/UserList";
import { UserForm } from "../components/users/UserForm";
import { StyledHome } from "./Home.styles";

export const Home = () => {
  return (
    <StyledHome>
      <UserForm />
      <UserList />
    </StyledHome>
  );
};

export default Home;
