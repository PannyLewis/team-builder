import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const membersArray = [
  {
    id: "0",
    name: "Panny",
    github: "https://github.com/PannyLewis",
    email: "panny-lewis@lambdastudents.com",
  },
  {
    id: "2",
    name: "Shomari",
    github: "https://github.com/slroberts",
    email: "shomari-roberts@lambdastudents.com",
  },
  {
    id: "3",
    name: "Sara",
    github: "https://github.com/reidysj",
    email: "sara-reidy@lambdastudents.com",
  },
];

function App() {
  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="members-container">
        {membersArray.map((item) => (
          <div className="member-card" key={item.id}>
            <p>{item.name}</p>
            <p>{item.github}</p>
            <p>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
