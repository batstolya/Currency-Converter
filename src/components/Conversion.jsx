import React, { Fragment, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import styles from "./Conversion.module.scss";

const Conversion = (props) => {
  //dropdown
  const [selected, setSelected] = useState({
    flag: "USD",
    url: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-800.png",
  });
  const [selected2, setSelected2] = useState({
    flag: "UAH",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/800px-Flag_of_Ukraine.svg.png",
  });

  const [inputValueFirst, setInputValueFirst] = useState(1);
  const [inputValueSecond, setInputValueSecond] = useState(1);

  const [indicator, setIndicator] = useState(true);

  const USD = props.usd;
  const EUR = props.eur;

  const inputRefFirst = useRef();
  const inputRefSecond = useRef();

  const handlerValueFirst = (e) => {
    setInputValueFirst(e.target.value);
    setIndicator(true);
  };

  const handlerValueSecond = (e) => {
    setInputValueSecond(e.target.value);
    setIndicator(false);
  };

  useEffect(() => {
    //---------USD---------
    if (indicator === true) {
      console.log("workasdsadsadsa");
      if (selected.flag === "USD" && selected2.flag === "UAH") {
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst * USD));
      }
      if (selected.flag === "USD" && selected2.flag === "USD") {
        console.log(inputValueFirst, "inputValueFirst");
        setInputValueSecond(inputValueFirst);
      }
      if (selected.flag === "USD" && selected2.flag === "EUR") {
        console.log("asdasdsadasdasdas");
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst * (EUR / USD)));
      }
      //---------EUR---------
      if (selected.flag === "EUR" && selected2.flag === "UAH") {
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst * EUR));
      }
      if (selected.flag === "EUR" && selected2.flag === "USD") {
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst * (USD / EUR)));
      }
      if (selected.flag === "EUR" && selected2.flag === "EUR") {
        setInputValueSecond(inputValueFirst);
      }
      //---------UAH---------
      if (selected.flag === "UAH" && selected2.flag === "UAH") {
        setInputValueSecond(inputValueFirst);
      }
      if (selected.flag === "UAH" && selected2.flag === "USD") {
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst / USD));
      }
      if (selected.flag === "UAH" && selected2.flag === "EUR") {
        setInputValueSecond(MathRoundTwoDigits(inputValueFirst / EUR));
      }
    }
  }, [inputValueFirst, selected.flag, selected2.flag, EUR, USD]);

  useEffect(() => {
    if (indicator === false) {
      //---------UAH---------
      if (selected2.flag === "UAH" && selected.flag === "UAH") {
        setInputValueFirst(inputValueSecond);
      }
      if (selected2.flag === "UAH" && selected.flag === "USD") {
        setInputValueFirst(MathRoundTwoDigits(inputValueSecond / USD));
        console.log("tyt");
      }
      if (selected2.flag === "UAH" && selected.flag === "EUR") {
        setInputValueFirst(MathRoundTwoDigits(inputValueSecond / EUR));
      }
      //---------USD---------
      if (selected2.flag === "USD" && selected.flag === "UAH") {
        setInputValueFirst(MathRoundTwoDigits(USD * inputValueSecond));
      }
      if (selected2.flag === "USD" && selected.flag === "USD") {
        setInputValueFirst(inputValueSecond);
      }
      if (selected2.flag === "USD" && selected.flag === "EUR") {
        setInputValueFirst(MathRoundTwoDigits(inputValueSecond * (EUR / USD)));
      }
      //---------EUR---------
      if (selected2.flag === "EUR" && selected.flag === "UAH") {
        setInputValueFirst(MathRoundTwoDigits(inputValueSecond * EUR));
      }
      if (selected2.flag === "EUR" && selected.flag === "EUR") {
        setInputValueFirst(inputValueSecond);
      }
      if (selected2.flag === "EUR" && selected.flag === "USD") {
        setInputValueFirst(MathRoundTwoDigits(inputValueSecond * (EUR / USD)));
      }
    }
  }, [inputValueSecond]);

  const MathRoundTwoDigits = (num) => {
    return Math.round(num * 100) / 100;
  };

  const changeValue = () => {
    setSelected(selected2);
    setSelected2(selected);
  };

  return (
    <React.Fragment>
      <div className={styles["currency-block"]}>
        <label for="username">
          <h2>Enter how much you want to exchange:</h2>
        </label>
        <div className={styles["currency-block__exchange"]}>
          <div className={styles["currency-block__exchange__select"]}>
            <input
              id="username"
              ref={inputRefFirst}
              onChange={handlerValueFirst}
              type="number"
              value={inputValueFirst}
              className={styles.input}
            />
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              setIndicator={setIndicator}
            />
          </div>
          <div onClick={changeValue} className={styles.equals}>
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              className={styles["icon-arrow"]}
            />
          </div>
          <div className={styles["currency-block__exchange__select"]}>
            <input
              ref={inputRefSecond}
              onChange={handlerValueSecond}
              type="number"
              value={inputValueSecond}
              className={styles.input}
            />
            <Dropdown
              selected={selected2}
              setSelected={setSelected2}
              setIndicator={setIndicator}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Conversion;
