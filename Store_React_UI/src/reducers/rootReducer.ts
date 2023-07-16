import { combineReducers } from 'redux';

import postsReducer from './postsReducer';

export const rootReducers = combineReducers({
    posts: postsReducer,
});