import React, { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function AddUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then(() => {
        getUsers();
        setEmail();
      });
  };

  return (
    <div>
      <h2>Add new student</h2>
      <div>
        <Input
          onChange={(e)=>setName(e.target.value)}
          placeholder="first name"
          value={name}
        />


        <Input  onChange={(e)=>setEmail(e.target.value)}
          placeholder="first name"
          value={email}/>

          <Button 
          text="Add new user" 
          color="red"
          onClick={}/>
      </div>
    </div>
  );
}

export default AddUserForm;
