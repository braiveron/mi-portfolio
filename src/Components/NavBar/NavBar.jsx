import React from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { useTheme } from "../Theme/Themes";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();

  /*   className={clickFilters ? `${Styles["filters"]} ${Styles.active}` : `${Styles.filters}`} */

  return (
    <div className={Styles.navBar}>
      <div className={Styles.navContent}>
        <h1
          className={Styles.nombre}
          style={{
            color: theme.textColor,
          }}
        >
          Braian
        </h1>
        <div className={Styles.links}>
          <nav>
            <ul>
              <Link className={Styles.linkReact} to="/">
                <li className={Styles.liOne}>
                  <p
                    style={{
                      WebkitTextStroke: theme.borderLink,
                    }}
                    data-text="&nbsp;Inicio"
                  >
                    &nbsp;inicio&nbsp;
                  </p>
                </li>
              </Link>

              <Link className={Styles.linkReact} to="/mis-proyectos">
                <li className={Styles.liTwo}>
                  <p
                    style={{
                      WebkitTextStroke: theme.borderLink,
                    }}
                    data-text="&nbsp;Proyectos"
                  >
                    &nbsp;proyectos&nbsp;
                  </p>
                </li>
              </Link>
              <Link className={Styles.linkReact} to="/sobre-mi">
                <li className={Styles.liThree}>
                  <p
                    style={{
                      WebkitTextStroke: theme.borderLink,
                    }}
                    data-text="&nbsp;info"
                  >
                    &nbsp;info&nbsp;
                  </p>
                </li>
              </Link>
              <Link className={Styles.linkReact} to="/contactame">
                <li className={Styles.liFour}>
                  <p
                    style={{
                      WebkitTextStroke: theme.borderLink,
                    }}
                    data-text="&nbsp;Contacto"
                  >
                    &nbsp;contacto&nbsp;
                  </p>
                </li>
              </Link>
            </ul>
          </nav>

          {
            <div>
              <label className={Styles.switch}>
                <input
                  className={Styles.offScreen}
                  onClick={toggleTheme}
                  type="checkbox"
                />
                <span className={Styles.slider} />
              </label>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
