import React, { useEffect } from "react";
import { UserDetails } from "./UserDetails";
import { UserListLegend } from "./UserListLegend";
import { useUsersContext } from "../../hooks/useUsersContext";
import { StyledUserList } from "./UserList.styles";

export const UserList = () => {
  const { users, dispatch } = useUsersContext();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USERS", payload: json });
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
