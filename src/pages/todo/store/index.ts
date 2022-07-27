import { combineReducers } from 'redux';
import taskReducer from './task/slice';

const todoReducer = combineReducers({
  task: taskReducer,
});

export default todoReducer;
