import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import "./NavBar.css";
import { useTheme } from "../Theme/Themes";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [clickFilters, setFiltersClick] = useState(false);
  function filtersClick() {
    setFiltersClick(!clickFilters);
  }

  const { theme, toggleTheme } = useTheme();
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className={Styles.navContent}>
        <h1
          className={Styles.nombre}
          style={{
            color: "hsl(264, 51%, 71%)",
          }}
        >
          Braian
        </h1>
        <div className={Styles.links}>
          <nav>
            <ul className={click ? "navMenu active" : "navMenu"}>
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

        <div className="filter-icon">
          {clickFilters ? (
            ""
          ) : (
            <div className="navResponsive">
              <div className="iconMenu-switch">
                <div className="switch-container">
                  <label className="switchResponsive">
                    <input
                      className={Styles.offScreen}
                      onClick={toggleTheme}
                      type="checkbox"
                    />
                    <span className="sliderResponsive" />
                  </label>
                </div>

                <div onClick={filtersClick}>
                  <FaBars size={20} style={{ color: theme.textColor }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={clickFilters ? "filters active" : "filters"}>
        <ul className="iconsResponsive">
          <div style={{ width: "100%" }} onClick={filtersClick}>
            {clickFilters ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              ""
            )}
          </div>

          <h1
            className="nombreResposive"
            style={{
              color: "hsl(264, 51%, 71%)",
            }}
          >
            Braian
          </h1>
          <div className="iconsResponsive">
            <Link className={Styles.linkReact} to="/">
              <li className={Styles.liOne}>
                <p
                  style={{
                    WebkitTextStroke: "1px hsl(270, 12%, 93%)",
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
                    WebkitTextStroke: "1px hsl(270, 12%, 93%)",
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
                    WebkitTextStroke: "1px hsl(270, 12%, 93%)",
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
                    WebkitTextStroke: "1px hsl(270, 12%, 93%)",
                  }}
                  data-text="&nbsp;Contacto"
                >
                  &nbsp;contacto&nbsp;
                </p>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
}
