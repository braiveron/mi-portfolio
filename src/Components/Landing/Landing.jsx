import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={Styles.bodyLanding}>
      <div className={Styles.leftSide}>
        <span>left</span>
      </div>
      <div className={Styles.rightSide}>
        <span>rigth</span>
      </div>
    </div>
  );
}
