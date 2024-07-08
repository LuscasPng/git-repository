import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repositories from "./pages/Repositories";
import Main from "./pages/Main";
import React from "react";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/repositorie/:repo" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}