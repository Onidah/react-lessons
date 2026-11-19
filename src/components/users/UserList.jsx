import React from "react";
import Button from "../common/Button";

function UserCard({ user, onEdit, onDelete }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>

      <Button text="Edit" color="blue" onClick={() => onEdit(user)} />
      <Button text="Delete" color="red" onClick={() => onDelete(user.id)} />
    </div>
  );
}

export default UserCard;