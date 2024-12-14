import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NewGameApp from "./NewGameApp.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewGameApp />
  </StrictMode>
);
