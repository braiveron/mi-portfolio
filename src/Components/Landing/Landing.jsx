import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Landing.module.css";
import { useTheme } from "../Theme/Themes";
import Coding from "../../Utils/AvatarCoding.png";

export default function Landing() {
  const { theme } = useTheme();

  return (
    <div className={Styles.bodyLanding}>
      <div className={Styles.navBar}>
        <NavBar />
      </div>

      <div className={Styles.avatarCoding}>
        <img src={Coding} alt="not found" width={500} height={500} />
      </div>

      <div
        className={Styles.leftSide}
        style={{ backgroundColor: theme.backgroundLeft }}
      ></div>

      <div
        className={Styles.rightSide}
        style={{ backgroundColor: theme.backgroundRight }}
      >
        <div className={Styles.textContainer}>
          <h2 className={Styles.saludo} style={{ color: theme.textColor }}>
            👋 Hola, soy Braian
          </h2>

          <h3
            className={Styles.presentacion}
            style={{ color: theme.textColor }}
          >
            me gusta{" "}
            <a
              data-text="desarrollar"
              href="#proyectos"
              style={{
                WebkitTextStroke: theme.borderLink,
              }}
            >
              desarrollar
            </a>{" "}
            <br /> aplicaciones interactivas <br /> y{" "}
            <a
              data-text="divertidas"
              href="#info"
              style={{
                WebkitTextStroke: theme.borderLink,
              }}
            >
              divertidas
            </a>{" "}
            a <br /> traves del codigo
          </h3>
        </div>
      </div>
    </div>
  );
}
