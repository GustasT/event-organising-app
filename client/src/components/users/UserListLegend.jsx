import React from "react";
import { styled } from "styled-components";

const StyledUserListLegend = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 0.5fr;
  text-align: center;
  margin: 10px auto;
  word-wrap: break-word;
  word-break: break-all;

  :nth-child(2n) {
    border-right: 1px solid lightgray;
  }
  :nth-child(2n + 2) {
    border-left: 1px solid lightgray;
  }
  :first-child {
    border-left: 1px solid lightgray;
  }
  :last-child {
    border-right: 1px solid lightgray;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const UserListLegend = () => {
  return (
    <StyledUserListLegend>
      <p>First Name</p>
      <p>Last Name</p>
      <p>Email</p>
      <p>Birthday</p>
      <p>Actions</p>
    </StyledUserListLegend>
  );
};
