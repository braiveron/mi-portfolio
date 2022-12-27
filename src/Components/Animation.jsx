import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Landing/Landing";
import Proyectos from "./Proyectos/Proyectos";
import Contacto from "./Contacto/Contacto";
import Info from "./Info/Info";
import Slider from "./Slider/Slider";
import { AnimatePresence } from "framer-motion";

export default function Animation() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/mis-proyectos" element={<Proyectos />} />
        <Route exact path="/sobre-mi" element={<Info />} />
        <Route exact path="/contactame" element={<Contacto />} />
        <Route exact path="/slider" element={<Slider />} />
      </Routes>
    </AnimatePresence>
  );
}
