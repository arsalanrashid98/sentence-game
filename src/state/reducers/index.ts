import { combineReducers } from 'redux';
import gameReducer from './gameReducers';

const reducers = combineReducers({
  game: gameReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
