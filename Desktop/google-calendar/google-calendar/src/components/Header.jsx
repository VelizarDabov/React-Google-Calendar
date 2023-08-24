import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../store/Action";
import { addEvent } from "../store/Action";
import logo from "./images/logo.png";
import "./Header.css";
import EventForm from "./EventForm/EventForm";


const Header = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);


  const selectedDate = useSelector((state) => state.selectedDate);
  const dispatch = useDispatch();

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() - 1,
      1
    );
    dispatch(setSelectedDate(prevMonth));
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      1
    );
    dispatch(setSelectedDate(nextMonth));
  };
  

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const handleFormSubmit = (formData) => {
    const newEvent = {
      id: Date.now(),
      title: formData.title,
      startTime: new Date(formData.startTime),
      endTime: new Date(formData.endTime),
    };
    dispatch(addEvent(newEvent));
    setIsFormOpen(false);
  };

 
  return (
    <header>
      <div className='calendar-top'>
      <img src={logo} alt="calendar" className="calendarImg" />
      <div className="button-container">
      <button onClick={openForm} className="button">Add Event</button>
        </div>
      
      </div>
     
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        {selectedDate && (
          <h2 className="centered-text">
            {selectedDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
        )}
       
        {isFormOpen && <EventForm onClose={closeForm} onSubmit={handleFormSubmit} />}
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
    </header>
  );
};
export default Header;
