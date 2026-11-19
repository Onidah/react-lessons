import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function EditUserForm({ user, onUpdate, onCancel }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <h2>Edit user</h2>
        <div>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="first name"
            value={name}
          />

          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />

          <Button
            text="Update"
            color="blue"
            onClick={() => onUpdate(name, email)}
          />
          <Button text="Cancel" color="orange" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
}

export default EditUserForm;