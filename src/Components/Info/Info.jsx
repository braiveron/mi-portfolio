import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Info.module.css";
import { useTheme } from "../Theme/Themes";

export default function Info() {
  const { theme } = useTheme();

  return (
    <div className={Styles.infoContainer}>
      <NavBar />
      <div
        className={Styles.infoBackground}
        style={{ backgroundColor: theme.bgcInfo }}
      >
        <div className={Styles.decorationOne}>
          <p
            className={Styles.circleOne}
            style={{ border: theme.borderCard }}
          ></p>
          <p className={Styles.circleTwo}></p>
        </div>

        <div
          className={Styles.card}
          style={{
            backgroundColor: theme.bgcCardInfo,
            boxShadow: theme.cardShadow,
            border: theme.borderCard,
          }}
        >
          <div className={Styles.textContainer}>
            <h1 className={Styles.infoTitle} style={{ color: theme.textColor }}>
              Sobre mi.
            </h1>
            <p className={Styles.sublineTitle}></p>

            <p className={Styles.paragraph} style={{ color: theme.textColor }}>
              Soy Braian de Buenos Aires, Argentina. <br /> Egresado de la
              carrera <strong> Full Stack Developer</strong>, Soy Henry®. <br />{" "}
              <br /> Si bien puedo aplicar mis conocimientos en cualquier área,
              me inclino más hacia el Front End combinando mi experiencia en{" "}
              <u>diseño gráfico</u> y lograr así una buena experiencia para
              usuarios. <br />
              <br />
              Mis hobbies son la danza y el ejercicio, mi lado creativo siempre
              guiandome, tanto en lo personal como en lo profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
