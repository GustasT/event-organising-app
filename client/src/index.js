import React from "react";
import ReactDOM from "react-dom/client";
import { UsersContextProvider } from "./context/UsersContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </React.StrictMode>
);
