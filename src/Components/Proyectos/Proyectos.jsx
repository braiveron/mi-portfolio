import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Proyectos.module.css";
import { useTheme } from "../Theme/Themes";
import BFLogo from "../../Utils/BFLogo.png";

export default function Proyectos() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={Styles.mainContainer}
      style={{
        backgroundColor: theme.bgcProyectos,
      }}
    >
      <NavBar />
      <div className={Styles.leftContainer}>
        <h2
          className={Styles.proyectTitle}
          style={{
            color: theme.textColor,
          }}
        >
          Proyectos.
        </h2>
        <div
          className={Styles.card}
          style={{
            backgroundColor: theme.bgcCardProyect,
            border: theme.borderCard,
          }}
        >
          <div
            className={Styles.topCard}
            style={{
              color: theme.textColor,
            }}
          >
            •••
          </div>

          <div
            className={Styles.textCard}
            style={{
              borderTop: theme.borderCard,
            }}
          >
            {/*  {theme ? (
              <img src={BFLogo} alt="not found" width={240} height={80} />
            ) : (
              "HOLAS"
            )} */}

            <img src={BFLogo} alt="not found" width={240} height={80} />

            <p
              style={{
                color: theme.textColor,
              }}
            >
              E-commerce de indumentaria deportiva. <br />
              Contiene diferentes funciones para usuarios logueados o no y para
              administradores. <br /> Se implementa autenticacion con la
              tecnologi Auth0 y se incorpora la pasarela de pago de MercadoPago.
            </p>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/br1oli/Becoming_Fit"
              target="_blank"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="https://becoming-fit.vercel.app/"
              target="_blank"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
        </div>
        <div className={Styles.linkedinBox}>
          <a
            href="https://www.linkedin.com/in/braianveron/"
            target="_blank"
            style={{
              backgroundColor: theme.bgcCardProyect,
              border: theme.borderCard,
              boxShadow: theme.linkShadow,
              color: theme.textColor,
              /*   onMouseOut: (this.style.backgroundColor = theme.prueba), */
            }}
          >
            visita mi Linkedin...
          </a>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <div
          className={Styles.cardTwo}
          style={{
            backgroundColor: theme.bgcCardProyect,
            border: theme.borderCard,
          }}
        >
          <div
            className={Styles.topCard}
            style={{
              color: theme.textColor,
            }}
          >
            •••
          </div>

          <div
            className={Styles.textCard}
            style={{
              borderTop: theme.borderCard,

              color: theme.textColor,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis
            et nobis at natus accusamus commodi suscipit ut vitae eveniet,
            reprehenderit recusandae asperiores beatae dolorem dolorum veritatis
            enim alias nihil.
          </div>

          <div className={Styles.linksCard}>
            <a
              href="#"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="#"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
        </div>

        <div
          className={Styles.cardThree}
          style={{
            backgroundColor: theme.bgcCardProyect,
            border: theme.borderCard,
          }}
        >
          <div
            className={Styles.topCard}
            style={{
              color: theme.textColor,
            }}
          >
            •••
          </div>

          <div
            className={Styles.textCard}
            style={{
              borderTop: theme.borderCard,

              color: theme.textColor,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo omnis
            et nobis at natus accusamus commodi suscipit ut vitae eveniet,
            reprehenderit recusandae asperiores beatae dolorem dolorum veritatis
            enim alias nihil.
          </div>

          <div className={Styles.linksCard}>
            <a
              href="#"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="#"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
