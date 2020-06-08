import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Forms";

const membersArray = [
  {
    id: "0",
    name: "Panny",
    github: "https://github.com/PannyLewis",
    email: "panny-lewis@lambdastudents.com",
    role: "Frontend",
  },
  {
    id: "2",
    name: "Shomari",
    github: "https://github.com/slroberts",
    email: "shomari-roberts@lambdastudents.com",
    role: "Frontend",
  },
  {
    id: "3",
    name: "Sara",
    github: "https://github.com/reidysj",
    email: "sara-reidy@lambdastudents.com",
    role: "Project Manager",
  },
];

function App() {
  const [members, setMembers] = useState([membersArray]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

    <div>
      <div className="form-container">
        <Form />
      </div>

      <div className="members-container">
        {membersArray.map((item) => (
          <div className="member-card" key={item.id}>
            <p>{item.name}</p>
            <p>{item.github}</p>
            <p>{item.email}</p>
            <p>{item.role}</p>
          </div>
        ))}
      </div>
    </div>

    // </div>
  );
}

export default App;
