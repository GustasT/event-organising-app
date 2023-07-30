import React from "react";
import { UserList } from "../components/users/UserList";
import { styled } from "styled-components";
import { UserForm } from "../components/users/UserForm";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 8%;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
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
