import React, { useState } from "react";
import "./DayComponent.css";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent} from "../../store/Action";
const DayEvent = ({ date }) => {
  const eventsData = useSelector((state) => state.loadEvents.eventsData);
  const formattedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  )
    .toISOString()
    .split("T")[0];

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };
  const handleDeleteClick = () => {
    dispatch(deleteEvent(selectedEvent.id));
    setIsModalOpen(false);
  };
  return (
    <div>
      {eventsData.map((event) => {
        let currentEvent = new Date(event.startTime)
          .toISOString()
          .split("T")[0];
        if (currentEvent === formattedDate) {
          return (
            <div
              key={event.startTime}
              className="event"
              onClick={() => handleEventClick(event)}
            >
              {event.title}
            </div>
          );
        }
        return null;
      })}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2 className="title">{selectedEvent.title}</h2>
          <p className="paragraph">
            Start Time: {selectedEvent.startTime.toLocaleString()}
          </p>
          <p className="paragraph">
            End Time: {selectedEvent.endTime.toLocaleString()}
          </p>
          <p className="paragraph">Description: {selectedEvent.description}</p>
          <button className="button" onClick={() => setIsModalOpen(false)}>
            Close
          </button>
          <button className="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </Modal>
      )}
    </div>
  );
};
export default DayEvent;
