import { combineReducers } from 'redux';
import todoReducer from '../../pages/todo/store';

export const rootReducer = combineReducers({
    todo: todoReducer,
  });
