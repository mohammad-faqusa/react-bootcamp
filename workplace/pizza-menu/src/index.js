import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Faqusa Pizza Company</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menue</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
  );
  //   return React.createElement("footer", null, "We're currently open!"); // param[0] : element type, param[1]: props, param[2]: child
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
