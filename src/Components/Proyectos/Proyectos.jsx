import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Proyectos.module.css";
import { useTheme } from "../Theme/Themes";
import BFLogo from "../../Utils/BFLogo.png";
import Calculadora from "../../Utils/Calculadora.png";
import Tareas from "../../Utils/Tareas.png";
import Slider from "../Slider/Slider";

export default function Proyectos() {
  const { theme } = useTheme();

  return (
    <div
      className={Styles.mainContainer}
      style={{
        backgroundColor: theme.bgcProyectos,
      }}
    >
      <div className={Styles.navContainer}>
        <NavBar />
      </div>
      <div className={Styles.sliderContent}>
        <Slider />
      </div>
      <div className={Styles.leftContainer}>
        <h2
          className={Styles.proyectTitle}
          style={{
            color: theme.textColor,
          }}
        >
          Proyectos.
        </h2>
        <p className={Styles.sublineTitle}></p>
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
            <div className={Styles.imgContainer}>
              <img
                src={BFLogo}
                alt="not found"
                width={240}
                height={80}
                style={{
                  backgroundColor: theme.BFbgc,
                  padding: "5px 10px",
                }}
              />
            </div>

            <p
              style={{
                color: theme.textColor,
              }}
            >
              E-commerce de indumentaria deportiva. <br />
              Contiene diferentes funciones para usuarios logueados o no y para
              administradores. <br /> Se implementa autenticacion con la
              tecnologia Auth0 y se incorpora la pasarela de pago de
              MercadoPago.
            </p>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/br1oli/Becoming_Fit"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="https://becoming-fit.vercel.app/"
              target="_blank"
              rel="noreferrer"
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
            rel="noreferrer"
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
            <div className={Styles.imgContainer}>
              <img src={Tareas} alt="not found" width={360} height={120} />
            </div>

            <p
              style={{
                color: theme.textColor,
              }}
            >
              Aplicacion para crear una lista de tareas. <br />
              Funciones para agregar tareas a realizar, marcarlas como ya hechas
              y la opcion de poder eliminarlas del listado. <br />
            </p>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/braiveron/tareasApp"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="https://tareas-app-black.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
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
            <div className={Styles.imgContainer}>
              <img
                src={BFLogo}
                alt="not found"
                width={240}
                height={80}
                style={{
                  backgroundColor: theme.BFbgc,
                  padding: "5px 10px",
                }}
              />
            </div>

            <p
              style={{
                color: theme.textColor,
              }}
            >
              Proyecto Individual consumiendo informacion de una API, recreando
              un buscador y creador de recetas. <br /> Busqueda y filtros por
              tipos de dieta, orden alfabetico.
            </p>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/braiveron/PI-FOOD"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
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
            <div className={Styles.imgContainer}>
              <img src={Calculadora} alt="not found" width={200} height={240} />

              <p
                style={{
                  color: theme.textColor,
                }}
              >
                Calculadora con operaciones basicas de suma, resta,
                multiplicacion y division <br />
              </p>
            </div>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/braiveron/Calculadora-REACT"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="https://calculadora-react-xi-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
        </div>

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
            <div className={Styles.imgContainer}>
              <img
                src={BFLogo}
                alt="not found"
                width={240}
                height={80}
                style={{
                  backgroundColor: theme.BFbgc,
                  padding: "5px 10px",
                }}
              />
            </div>

            <p
              style={{
                color: theme.textColor,
              }}
            >
              Proyecto Individual consumiendo informacion de una API, recreando
              un buscador y creador de pokemons. <br /> Busqueda y filtros por
              tipos de pokemon, orden alfabetico.
            </p>
          </div>

          <div className={Styles.linksCard}>
            <a
              href="https://github.com/braiveron/P-Pokemon"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Repositorio
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.textColor,
              }}
            >
              Visita el proyecto →
            </a>
          </div>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}
