import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Info.module.css";
import { useTheme } from "../Theme/Themes";

export default function Info() {
  const { theme } = useTheme();

  return (
    <div
      className={Styles.infoContainer}
      style={{ backgroundColor: theme.bgcInfo }}
    >
      <div className={Styles.navBar}>
        <NavBar />
      </div>

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
        <div>
          <h1 className={Styles.infoTitle} style={{ color: theme.textColor }}>
            Sobre mi.
          </h1>
          <p className={Styles.sublineTitle}></p>
        </div>

        <p className={Styles.paragraph} style={{ color: theme.textColor }}>
          Soy Braian de Buenos Aires, Argentina. <br /> Egresado de la carrera{" "}
          <strong> Full Stack Developer</strong>, Soy Henry®. <br /> <br /> Si
          bien puedo aplicar mis conocimientos en cualquier área, me inclino más
          hacia el Front End combinando lo adquirido en la carrera de{" "}
          <u>diseño gráfico</u>, sumado también al manejo de aplicaciones de
          ediciòn para lograr así una buena experiencia de usuarios. <br />
          <br />
          Mis hobbies son la danza y el ejercicio, mi lado creativo siempre
          guiandome, tanto en lo personal como en lo profesional.
        </p>
      </div>
    </div>
  );
  /*     <div
      className={Styles.infoContainer}
      style={{ backgroundColor: theme.bgcInfo }}
    >
      <div>
        <NavBar />
      </div>
      <div className={Styles.infoPosition}>
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
              me inclino más hacia el Front End combinando lo adquirido en la
              carrera de <u>diseño gráfico</u>, sumado también al manejo de
              aplicaciones de ediciòn para lograr así una buena experiencia de
              usuarios. <br />
              <br />
              Mis hobbies son la danza y el ejercicio, mi lado creativo siempre
              guiandome, tanto en lo personal como en lo profesional.
            </p>
          </div>
        </div>
      </div>
    </div> */
}
