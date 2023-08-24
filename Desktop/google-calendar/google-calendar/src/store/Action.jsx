export const SELECT_DATE = 'SELECT_DATE';
export const ADD_EVENT = 'ADD_EVENT';
export const LOAD_EVENTS = 'LOAD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';

export const setSelectedDate = (date) => ({
    type: SELECT_DATE,
    payload:date,
})
export const addEvent = (event) => ({
type:ADD_EVENT,
payload:event,
})

export const loadEvents = (eventsData) => ({
  type: LOAD_EVENTS,
  payload: eventsData,
});
export const deleteEvent = (eventId) => ({
    type: DELETE_EVENT,
    payload: eventId,
  });

