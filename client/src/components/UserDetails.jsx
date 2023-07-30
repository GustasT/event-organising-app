import React from "react";

export const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <strong>{user.firstName}</strong>
      <p>
        <strong>{user.lastName}</strong>
      </p>
      <p>{user.email}</p>
      <p>{user.birthday}</p>
    </div>
  );
};
