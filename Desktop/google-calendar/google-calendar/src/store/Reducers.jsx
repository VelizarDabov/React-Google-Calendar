
import {combineReducers} from 'redux';
import { SELECT_DATE, ADD_EVENT, LOAD_EVENTS,DELETE_EVENT } from './Action';

const selectedDateReducer = (state = new Date(),action) => {
    switch(action.type) {
        case SELECT_DATE: return action.payload;;
        default: return state;
    }
};

    const eventReducer = (state =initialState.eventsData,action) =>{
switch (action.type) {
    case ADD_EVENT: return [...state, action.payload]
    default:
       return state;
}
    
}

const initialState = {
    eventsData: [   {
        "id": 1,
        "startTime": "2023-08-10 14:00:00",
        "endTime": "2023-08-10 16:00:00",
        "title": "Team Meet",
        "description": "Discuss project progress."
      },
      {
        "id": 2,
        "startTime": "2023-08-15 10:30:00",
        "endTime": "2023-08-15 12:00:00",
        "title": "Client Presentation",
        "description": "Present new product."
      },
      {
        "id": 3,
        "startTime": "2023-08-25 09:00:00",
        "endTime": "2023-08-25 10:30:00",
        "title": "Training Session",
        "description": "Training session."
      },
    ],
  };
  
  const loadReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_EVENTS:
        return {
          ...state,
          eventsData: action.payload,
        };
        case DELETE_EVENT:
            return {
              ...state,
              eventsData: state.eventsData.filter(event => event.id !== action.payload),
            };
          default:
            return state;
        }
      
  };

const rootReducer = combineReducers({
    selectedDate: selectedDateReducer,
    event: eventReducer,
    loadEvents:loadReducer,
})

export default rootReducer;