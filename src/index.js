import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoordProvider from "./context/CoordProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CoordProvider>
      <App />
    </CoordProvider>
  </React.StrictMode>
);
