import { combineReducers } from 'redux';
import itemsReducer from './itemsReducers';

export const rootReducers = combineReducers({
    items: itemsReducer,
});
