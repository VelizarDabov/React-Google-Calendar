import React, { useState } from "react";
import "./EventForm.css";
import { loadEvents } from "../../store/Action";
import { useDispatch, useSelector } from "react-redux";

const EventForm = ({ date, onClose, onSubmit }) => {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.loadEvents.eventsData);

  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now(),
      title,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      description,
    };
    const updatedEvents = [...eventsData, formData];
    dispatch(loadEvents(updatedEvents));

    setTitle("");
    setStartTime("");
    setEndTime("");
    setDescription("");

    onClose();
  };
  return (
    <div className="modal-form">
      <div className="event-form">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={handleTitle} />
          </label>
          <label>
            Start time:
            <input
              type="datetime-local"
              value={startTime}
              onChange={handleStartTime}
            />
          </label>
          <label>
            End time:
            <input
              type="datetime-local"
              value={endTime}
              onChange={handleEndTime}
            />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={handleDescription} />
          </label>
          <div className="buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
