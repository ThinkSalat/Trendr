import { merge } from 'lodash';

import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const imagesReducer = (state = [], action) => {
  Object.freeze(state);
  console.log('images reducer',action);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      debugger
      return action.images;
    case RECEIVE_POST:
      return merge([],state, action.images);
    default:
      return state;
  }
};

export default imagesReducer;