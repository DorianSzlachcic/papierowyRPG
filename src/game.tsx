import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameApp from "./GameApp.tsx";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameApp />
  </StrictMode>
);
