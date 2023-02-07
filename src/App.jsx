import React, { useEffect, useState } from "react";

import Conversion from "./components/Conversion";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [curUSD, setCurUSD] = useState({ rates: { UAH: "" } });
  const [curEUR, setCurEUR] = useState({ rates: { UAH: "" } });

  var now = new Date();
  let todayDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  //getDate actual
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let todayDate2 = `${now.getFullYear()}-${
    month[now.getMonth()]
  }-${now.getDate()}`;
  let todayTimes = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  useEffect(() => {
    console.log("render1");
    fetch(`https://api.exchangerate.host/{${todayDate}}?symbols=UAH&base=USD`)
      .then((res) => res.json())
      .then((date) => {
        setCurUSD(date);
      });
    fetch(`https://api.exchangerate.host/{${todayDate}}?symbols=UAH&base=EUR`)
      .then((res) => res.json())
      .then((date) => {
        setCurEUR(date);
      });
  }, []);

  return (
    <React.Fragment>
      <Header
        usd={curUSD.rates.UAH}
        eur={curEUR.rates.UAH}
        date={todayDate2}
        todayTimes={todayTimes}
      />
      <Conversion usd={curUSD.rates.UAH} eur={curEUR.rates.UAH} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
