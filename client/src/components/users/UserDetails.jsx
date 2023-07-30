import React from "react";

export const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.birthday}</p>
    </div>
  );
};
