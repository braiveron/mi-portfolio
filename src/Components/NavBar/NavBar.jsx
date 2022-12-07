import React from "react";
import Styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={Styles.navBar}>
      <div className={Styles.navContent}>
        <h1>Braian</h1>
        <div className={Styles.links}>
          <nav>
            <ul>
              <li className={Styles.liOne}>
                <a href="#" data-text="&nbsp;Inicio">
                  &nbsp;inicio&nbsp;
                </a>
              </li>
              <li className={Styles.liTwo}>
                <a href="#" data-text="&nbsp;Proyectos">
                  &nbsp;proyectos&nbsp;
                </a>
              </li>
              <li className={Styles.liThree}>
                <a href="#" data-text="&nbsp;info">
                  &nbsp;info&nbsp;
                </a>
              </li>
              <li className={Styles.liFour}>
                <a href="#" data-text="&nbsp;Contacto">
                  &nbsp;contacto&nbsp;
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <label className={Styles.switch}>
              <input type="checkbox" />
              <span className={Styles.slider} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
