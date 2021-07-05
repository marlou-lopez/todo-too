import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import todoReducer from './todoReducer';

const reducers = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
