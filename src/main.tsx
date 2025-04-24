import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App.tsx";
import { QueryProvider } from "./components/QueryProvider.tsx";

render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>,
  document.getElementById("root")
);
