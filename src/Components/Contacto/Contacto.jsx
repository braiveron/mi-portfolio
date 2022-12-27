import React from "react";
import NavBar from "../NavBar/NavBar";
import Styles from "./Contacto.module.css";
import { useTheme } from "../Theme/Themes";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Avatar2 from "../../Utils/Avatar2.png";
import { motion } from "framer-motion";

export default function Contacto() {
  const { theme } = useTheme();

  return (
    <motion.div
      className={Styles.contactContainer}
      style={{
        background: theme.backgroundRight,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <NavBar />

      <div
        className={Styles.cardContainer}
        style={{
          background: theme.backgroundRight,
        }}
      >
        <div
          className={Styles.leftSide}
          style={{
            background: theme.bgcCardInfo,
          }}
        >
          <h2
            className={Styles.titleContact}
            style={{
              color: theme.textColor,
            }}
          >
            Siempre estoy dispuesto a charlar.
          </h2>

          <p
            className={Styles.paragraph}
            style={{
              color: theme.textColor,
            }}
          >
            Puedes{" "}
            <strong>
              <u> enviarme un email</u>
            </strong>{" "}
            a braianveron88@gmail.com <br /> o darme un saludo en las redes
            sociales.
          </p>

          <div className={Styles.linksContact}>
            <a
              href="https://github.com/braiveron"
              style={{
                color: theme.textColor,
              }}
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/braianveron/"
              style={{
                color: theme.textColor,
              }}
            >
              <BsLinkedin />
            </a>
          </div>

          <h1
            className={Styles.heyThere}
            style={{
              color: theme.textColor,
            }}
          >
            Hey there!
          </h1>
        </div>

        <div
          className={Styles.rightSide}
          style={{
            background: theme.bgcCardInfo,
          }}
        >
          <motion.p
            className={Styles.circle}
            style={{
              backgroundColor: theme.backgroundRight,
            }}
            initial={{ x: -100 }}
            animate={{ x: 0, rotate: [0, 90, 0] }}
            transition={{
              type: "spring",
              bounce: 0.8,
            }}
          ></motion.p>

          <motion.img
            className={Styles.avatar}
            src={Avatar2}
            alt="not found"
            width={480}
            height={480}
            initial={{ y: -100 }}
            animate={{ y: 0, rotate: [0, 90, -90, 20, 0] }}
            transition={{
              type: "spring",
              bounce: 0.8,
              duration: 1,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
