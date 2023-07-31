import React from "react";
import { useUsersContext } from "../../hooks/useUsersContext";

export const UserDetails = ({ user }) => {
  const { dispatch } = useUsersContext();

  const handleEdit = async () => {
    // const response = await fetch('/api/users/' + user._id, {
    //   method: "PATCH",
    // });
    // const json = await response.json()
    // if (response.ok){
    //   console.log(json);
    // }
  };

  const handleDelete = async () => {
    const response = await fetch("/api/users/" + user._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      dispatch({ type: "DELETE_USER", payload: json });
    }
  };

  return (
    <div className="user-details">
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.birthday}</p>
      <div className="buttons">
        <span className="edit" onClick={handleEdit}>
          edit
        </span>
        <span className="delete" onClick={handleDelete}>
          delete
        </span>
      </div>
    </div>
  );
};
