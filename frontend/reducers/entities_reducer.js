import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import imagesReducer from './images_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  images: imagesReducer
});

export default entitiesReducer;