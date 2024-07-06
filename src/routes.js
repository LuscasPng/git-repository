import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Main from "./pages/Main";
import Repositories from "./pages/Repositories";

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