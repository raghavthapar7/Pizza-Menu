import React from "react";
import ReactDOM from "react-dom/client";

// The name of this function should always start with a capital letter
function App() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {
      "React strict mode renders the component twice and helps us know if there are any bugs or if we are using any outdated react API things"
    }
  </React.StrictMode>
);
