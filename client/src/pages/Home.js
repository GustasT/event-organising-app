import React from "react";
import { UserList } from "../components/userList/UserList";
import { styled } from "styled-components";
import { UserForm } from "../components/UserForm";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 100px;
`;

export const Home = () => {
  return (
    <StyledHome>
      <UserForm />
      <UserList />
    </StyledHome>
  );
};

export default Home;
