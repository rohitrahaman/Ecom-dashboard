import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Pages/Dashboard";
import DataFetching from "./Pages/DataFetching";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/datafetching" element={<DataFetching />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
