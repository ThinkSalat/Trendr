import { merge } from 'lodash';

import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const imagesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    return action.images;
    case RECEIVE_POST:
      return merge([],state, action.images);
    default:
      return state;
  }
};

export default imagesReducer;