import React, { useState } from "react";
import styles from "./Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown(props) {
  const [isActive, setIsActive] = useState(false);

  const options = [
    {
      flag: "USD",
      url: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png",
    },
    {
      flag: "EUR",
      url: "https://cdn-icons-png.flaticon.com/512/330/330426.png",
    },
    {
      flag: "UAH",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png",
    },
  ];

  return (
    <div className={styles.dropdown}>
      <div
        className={styles["dropdown-btn"]}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {props.selected.flag}
        <img src={props.selected.url} alt="flag" />
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isActive && (
        <div className={styles["dropdown-content"]}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                props.setSelected(option);
                props.setIndicator(true);
                setIsActive(false);
              }}
              className={styles["dropdown-item"]}
            >
              {option.flag}
              <img className={styles['dropdown-item__img']} src={option.url} alt="flag" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
