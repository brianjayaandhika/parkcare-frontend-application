import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import CheckIn from "./CheckIn.tsx";
import CheckOut from "./CheckOut.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CheckIn />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
