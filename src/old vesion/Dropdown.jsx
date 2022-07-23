import React, { useState } from "react";
import styles from "./Dropdown.module.css";
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
  options.map((i) => console.log(i));
  return (
    <div className={styles.dropdown}>
      <div
        className={styles["dropdown-btn"]}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {props.selected.flag}
        <img style={{ width: "50px" }} src={props.selected.url} />

        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isActive && (
        <div className={styles["dropdown-content"]}>
          {options.map((option) => (
            <div
              onClick={(e) => {
                props.setSelected(option);
                setIsActive(false);
                console.log(option.flag);
              }}
              className={styles["dropdown-item"]}
            >
              {option.flag}
              <img style={{ width: "50px" }} src={option.url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
