import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App register={true} username={"alexa"} pwd={"alexa321"} />
  </StrictMode>
);
