import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Contacto.module.css";
import { useTheme } from "../Theme/Themes";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contacto() {
  const { theme } = useTheme();

  return (
    <div
      className={Styles.contactContainer}
      style={{
        background: theme.backgroundRight,
      }}
    >
      <NavBar />

      <div className={Styles.cardContainer}>
        <div className={Styles.textContact}>
          <div className={Styles.info}>
            <h2 className={Styles.titleContact}>
              Siempre estoy dispuesto a charlar.
            </h2>
            <p className={Styles.paragraph}>
              Puedes{" "}
              <strong>
                <u> enviarme un email</u>
              </strong>{" "}
              a braianveron88@gmail.com <br /> o darme un saludo en las redes
              sociales.
            </p>
            <div className={Styles.linksContact}>
              <a href="https://github.com/braiveron">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/braianveron/">
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className={Styles.imageContact}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            deleniti, placeat, quae voluptatibus magni accusantium voluptatum,
            ipsum nisi tempore eum aperiam dolor? Enim harum consequatur unde
            reprehenderit fuga quae quidem!
          </div>
        </div>
      </div>
      <h1 className={Styles.heyThere}>Hey there!</h1>
    </div>
  );
}
