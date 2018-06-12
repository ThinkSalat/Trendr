import { merge } from 'lodash';

import { 
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case RECEIVE_POSTS:
      return action.posts;
    case REMOVE_POST: 
      const newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    case RECEIVE_USER:
      return action.posts;
    default:
      return state;
  }
};

export default postsReducer;