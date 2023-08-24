import React from "react";
import "./DayComponent.css";
import DayEvent from "./DayEvent";

const Day = ({ date }) => {
  if (!date) {
    return <div className="empty-day"></div>;
  }
  const today = new Date();
  const formattedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  )
    .toISOString()
    .split("T")[0];
  const isToday = formattedDate === today.toISOString().split("T")[0];

  return (
    <div className={`day ${isToday ? "active" : ""}`}>
      <div className="date">{date.getDate()}</div>
      <DayEvent date={date} />
    </div>
  );
};

export default Day;
