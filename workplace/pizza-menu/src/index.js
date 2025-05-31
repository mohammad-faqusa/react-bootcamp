import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>JS</p>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src={pizzaData[0].photoName} />
      <p>{pizzaData[0].name}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");

// react version 18
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />, document.getElementById("root"););
