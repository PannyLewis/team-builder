import React, { useState } from "react";

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gihub: "",
    role: "",
  });
  console.log(props);
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        // onChange={handleChanges}
        type="text"
        placeholder="Enter your name"
        value={form.name}
        name="name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        // onChange={handleChanges}
        type="text"
        placeholder="Enter your email"
        value={form.email}
        name="email"
      />

      <label htmlFor="github">Github</label>
      <input
        id="github"
        // onChange={handleChanges}
        type="text"
        placeholder="Enter your github"
        value={form.gihub}
        name="github"
      />

      <label htmlFor="role">Role</label>
      <input
        id="role"
        // onChange={handleChanges}
        type="text"
        placeholder="Enter your role"
        value={form.role}
        name="role"
      />

      <button type="submit">Add new team member</button>
    </form>
  );
};

export default Form;
