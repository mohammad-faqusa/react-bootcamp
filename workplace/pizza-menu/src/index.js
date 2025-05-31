import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "mohammad"; // warning: the variable is declared but is not used yet !
  return (
    <div>
      <h1>Hello React!</h1>
      <p>JS</p>
    </div>
  );
} // error , the returned value must be wrapped

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
