import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

export const UserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { firstName, lastName, email, birthday };

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>First name:</label>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
      />
      <label>Last name:</label>
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label>Birthday:</label>
      <input
        type="date"
        onChange={(e) => setBirthday(e.target.value)}
        value={birthday}
        required
      />
      <button type="submit">submit</button>
    </StyledForm>
  );
};
