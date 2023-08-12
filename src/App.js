import React from "react";
import { useState } from "react";
import Number from "./Number";

const App = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  setInterval(() => {
    setTime({
      h: new Date().getHours(),
      m: new Date().getMinutes(),
      s: new Date().getSeconds(),
    });
  }, 1000);
  return (
    <div className="clock-container">
      <Number props={time.h < 10 ? "0" : `${parseInt(time.h / 10)}`} />
      <Number props={time.h < 10 ? `${time.h}` : `${time.h % 10}`} />
      <div className="seperator">:</div>
      <Number props={time.m < 10 ? "0" : `${parseInt(time.m / 10)}`} />
      <Number props={time.m < 10 ? `${time.m}` : `${time.m % 10}`} />
      <div className="seperator">:</div>
      <Number props={time.s < 10 ? 0 : `${parseInt(time.s / 10)}`} />
      <Number props={time.s < 10 ? `${time.s}` : `${time.s % 10}`} />
    </div>
  );
};

export default App;
