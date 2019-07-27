import React from "react";
import "./App.css";

function App() {
  return (
    <div className="content">
      react porridge
      <h1>Hello World</h1>
      <h2>I write about Porridge</h2>
      <p>
        So Porridge is a topic ive always been interested in. I think not enough
        people are interested in porridge. There are different ways to eat it
        and each country has their own variation of it
      </p>
      <div className="lists">
        <ul>
          <li>
            <a href="cooked porridge.html">Cooked Porridge</a>
          </li>
          <li>Cold Porridge</li>
          <li>Toni Porridge</li>
          <li>Crazy Porridge</li>
        </ul>
      </div>
      <div>
        <p id="footer"> Cat Rivers on Porrdige (TM)</p>
      </div>
    </div>
  );
}

export default App;

const PorridgeOne = () => (
  <div className="content">
    <div className="title">
      <h1> Hi! I love cooked Porridge!</h1>
    </div>
    <h2>And here are some reasons why</h2>

    <p>
      It is super high in nutrients and fiber, to fill your belly and makes you
      feel Strong and ready to take on the World{" "}
    </p>

    <h4>
      {" "}
      <a href="index.html">Home </a>{" "}
    </h4>
  </div>
);
