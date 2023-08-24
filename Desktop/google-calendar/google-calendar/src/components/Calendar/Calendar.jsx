import React from "react";
import { useSelector } from "react-redux";
import Day from "../DayComponent/Day";
import "./Calendar.css";
import DayEvent from "../DayComponent/DayEvent";
const Calendar = () => {
  const selectedDate = useSelector((state) => state.selectedDate);
  const firstDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
 
  const lastDayOfMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  );
  const emptyDays = firstDayOfMonth.getDay();
  const daysInMonth = [];

  for (let i = 0; i < emptyDays; i++) {
    daysInMonth.push(null);
  }

  for (
    let date = new Date(firstDayOfMonth);
    date <= lastDayOfMonth;
    date.setDate(date.getDate() + 1)
  ) {
    daysInMonth.push(new Date(date));
  }

  const renderDays = daysInMonth.map((date, index) => (
    <Day key={index} date={date} />
  ));
  <DayEvent  data={emptyDays} />
  return (
    <div className="calendar-container">
      <div className="calendar-grid">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>

        {renderDays}
      </div>
     
    </div>
  );
};

export default Calendar;
