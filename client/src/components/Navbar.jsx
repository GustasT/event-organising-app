import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { styled } from "styled-components";

const StyledNavbar = styled.header`
  background-color: #d1e5f4;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: gray;
  }
`;

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <Link to="/">
          <h1>Event Organiser</h1>
        </Link>
      </Container>
    </StyledNavbar>
  );
};
