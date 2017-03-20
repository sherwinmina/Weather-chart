import { combineReducers } from 'redux';

export default function(state = null, action) {
  console.log('Action recieved', action);
  return state;
}
