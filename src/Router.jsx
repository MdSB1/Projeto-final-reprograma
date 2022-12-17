import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu";

import { Inicio } from "./pages/Inicio";
import { Primavera } from "./pages/Primavera";
import { Verão } from "./pages/Verão";
import { Outono } from "./pages/Outono";
import { Inverno } from "./pages/Inverno";
import { Footer } from "./components/Footer";

export function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/primavera" element={<Primavera />} />
        <Route path="/verao" element={<Verão />} />
        <Route path="/outono" element={<Outono />} />
        <Route path="/inverno" element={<Inverno />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
