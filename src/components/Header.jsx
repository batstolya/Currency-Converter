import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  const MathRoundTwoDigits = (num) => {
    return Math.round(num * 100) / 100;
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles["header-actual__exchange"]}>
          <a href="#">
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/37/37203.png?w=1380&t=st=1658411627~exp=1658412227~hmac=f24be44ebc9e7b02ee988a41b4d2156de881109bc2a3db0e8ef14895fdc48bd8"
              alt="currency"
            />
          </a>
          <div>
            <p>1 USD = {MathRoundTwoDigits(props.usd)}</p>
            <p>1 EUR = {MathRoundTwoDigits(props.eur)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
