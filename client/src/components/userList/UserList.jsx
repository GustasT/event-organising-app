import React, { useState, useEffect } from "react";
import { UserDetails } from "../UserDetails";
import { styled } from "styled-components";

const StyledUserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */

  .user-details {
    border-radius: 4px;
    margin: 20px auto;
    padding: 20px;
    position: relative;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };

    fetchUsers(); // Call the fetchUsers function to fetch the data once when the component mounts
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <StyledUserList>
      {users === null ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => <UserDetails key={user._id} user={user} />)
      )}
    </StyledUserList>
  );
};
