import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <FontAwesomeIcon icon={faCoins} />
      <p>footer</p>
      <FontAwesomeIcon icon={faCoins} />
    </div>
  );
}
