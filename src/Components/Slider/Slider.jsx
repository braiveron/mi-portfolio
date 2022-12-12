import React from "react";
import Styles from "./Slider.module.css";
import JS from "../../Utils/Tech/JS.png";
import HTML from "../../Utils/Tech/HTML.png";
import CSS from "../../Utils/Tech/CSS.png";
import NODE from "../../Utils/Tech/NODE.png";
import SQL from "../../Utils/Tech/SQL.png";
import GIT from "../../Utils/Tech/GIT.png";
import REACT from "../../Utils/Tech/REACT.png";

export default function Slider() {
  return (
    <div className={Styles.slider}>
      <div className={Styles.slideTrack}>
        <div className={Styles.slide}>
          <img src={JS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={HTML} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={CSS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={NODE} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={SQL} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={REACT} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={GIT} alt="not found" />
        </div>
        <div className={Styles.slide}>
          <img src={JS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={HTML} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={CSS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={NODE} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={SQL} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={REACT} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={GIT} alt="not found" />
        </div>
        <div className={Styles.slide}>
          <img src={JS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={HTML} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={CSS} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={NODE} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={SQL} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={REACT} alt="not found" />
        </div>

        <div className={Styles.slide}>
          <img src={GIT} alt="not found" />
        </div>
      </div>
    </div>
  );
}
