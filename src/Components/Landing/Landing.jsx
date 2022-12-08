import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Landing.module.css";
import { useTheme } from "../Theme/Themes";

export default function Landing() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={Styles.bodyLanding}>
      <div className={Styles.navBar}>
        <NavBar />
      </div>
      <div
        className={Styles.leftSide}
        style={{ backgroundColor: theme.backgroundLeft }}
      >
        <span></span>
      </div>

      <div
        className={Styles.rightSide}
        style={{ backgroundColor: theme.backgroundRight }}
      >
        <div className={Styles.textContainer}>
          <h2 className={Styles.saludo} style={{ color: theme.textColor }}>
            Hola, soy Braian
          </h2>

          <h3
            className={Styles.presentacion}
            style={{ color: theme.textColor }}
          >
            me gusta <a href="#proyectos">desarrollar</a> <br /> aplicaciones
            interactivas <br /> y <a href="#info">divertidas</a> a <br /> traves
            del codigo
          </h3>
        </div>
      </div>
    </div>
  );
}
