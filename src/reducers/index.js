import { combineReducers } from 'redux';
import { messages, channels } from 'reducers/chat';
import { routeReducer } from 'utils/redux-simple-router';

export default combineReducers({
  routing: routeReducer,
  messages,
  channels
});
