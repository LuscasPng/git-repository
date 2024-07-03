import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Repositories from "./pages/Repositories";

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/repositorie/:repo" Component={Repositories} />
      </Routes>
    </BrowserRouter>
  );
}