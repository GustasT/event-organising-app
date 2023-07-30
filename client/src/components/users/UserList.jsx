import React, { useState, useEffect } from "react";
import { UserDetails } from "./UserDetails";
import { styled } from "styled-components";
import { UserListLegend } from "./UserListLegend";

const StyledUserList = styled.div`
  .user-details {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    text-align: center;
    border-radius: 4px;
    margin: 10px auto;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    word-wrap: break-word;
    word-break: break-all;
  }

  @media (max-width: 768px) {
    .user-details {
      font-size: 14px;
    }
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

    fetchUsers();
  }, []);

  return (
    <StyledUserList>
      <UserListLegend />
      {users === null ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users to display</p>
      ) : (
        users.map((user) => <UserDetails key={user._id} user={user} />)
      )}
    </StyledUserList>
  );
};
