import React from "react";
import moment from "moment";
import "./date.css"

const DateofToday = () => {


  let today = moment().format("dddd Do MMMM YYYY")
  let time = moment().format("h:mm A")

  return (
    <div className="date date-display font2">
      <div className="text-4xl tracking-tight">{today}</div>
      <div className="mt-1 text-8xl">{time}</div>
    </div>
  );
};

export default DateofToday;
