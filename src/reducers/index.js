import { combineReducers } from 'redux';
import workReducer from './workReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    work: workReducer,
    item: itemReducer
});

export default rootReducer;