import React, { useState } from "react";
import Input from "./Input";
import Title from "./Title";
import Button from "./Button";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Title title="New student" />
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Input type text" />
        <Input type="text" placeholder="Input type text" />
        <Input type="number" placeholder="Input type number" />
        <Input type="email" placeholder="Input type email" />
        <Input type="password" placeholder="Input type password" />
        <Button button="Click button" />
      </form>
    </div>
  );
}

export default RegisterForm;
