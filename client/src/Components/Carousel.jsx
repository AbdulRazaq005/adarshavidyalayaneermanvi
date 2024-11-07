/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const active = "panel active";
  const inactive = "panel";
  const timer = () => setCount((i + 1) % 5);

  const [i, setCount] = useState(0);
  const [id, setTimer] = useState();

  useEffect(() => {
    setTimer(setInterval(timer, 2000));
    return () => {
      clearInterval(id);
      setTimer();
    };
    console.log("count:", i);
  }, [i]);

  const fun = (c) => {
    clearInterval(id);
    setCount(c);
  };

  return (
    <div id="carousel">
      <div
        className={i === 0 ? active : inactive}
        style={{
          backgroundImage: "url(./images/1.png)",
        }}
        onClick={() => {
          fun(0);
        }}
      ></div>
      <div
        className={i === 1 ? active : inactive}
        style={{
          backgroundImage: "url(./images/2.png)",
        }}
        onClick={() => {
          fun(1);
        }}
      ></div>
      <div
        className={i === 2 ? active : inactive}
        style={{
          backgroundImage: "url(./images/3.jpg)",
        }}
        onClick={() => {
          fun(2);
        }}
      ></div>
      <div
        className={i === 3 ? active : inactive}
        style={{
          backgroundImage: "url(./images/4.png)",
        }}
        onClick={() => {
          fun(3);
        }}
      ></div>
      <div
        className={i === 4 ? active : inactive}
        style={{
          backgroundImage: "url(./images/5.png)",
        }}
        onClick={() => {
          fun(4);
        }}
      ></div>
    </div>
  );
}
