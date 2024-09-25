import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TipCalculator from "./TipCalculator";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TipCalculator />
  </StrictMode>
);
