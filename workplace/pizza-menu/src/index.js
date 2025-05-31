import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

const rootElement = document.getElementById("root");

// react version 18
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);

// React before 18
// React.render(<App />);
