import { combineReducers } from 'redux';
import workReducer from './workReducer';

const rootReducer = combineReducers({
    work: workReducer,
});

export default rootReducer;