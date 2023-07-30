import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

export const UserForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name:</label>
      <input type="text" name="firstName" id="firstName" />
      <label htmlFor="lastName">Last name:</label>
      <input type="text" name="lastName" id="lastName" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="birthday">Birthday:</label>
      <input type="date" name="birthday" id="birthday" />
      <button type="submit">submit</button>
    </StyledForm>
  );
};
