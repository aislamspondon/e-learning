import { Clock } from "@/utility/Clock";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const FlipClock = () => {
  const ref = useRef();
  let child;
  useEffect(() => {
    const deadline = new Date(
      Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000
    );
    const c = new Clock(deadline, function () {
      alert("countdown complete");
    });
    // console.log(c.el);
    ref.current = React.createElement("div", c);
    console.log(ref.current);
    // ref.current.appendChild(child);
  }, []);

  return <div ref={ref}>{ref.current}</div>;
};

export default FlipClock;
