import { merge } from 'lodash';

import { 
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    case RECEIVE_POSTS:
    case RECEIVE_USER:
      newState = {};
      action.posts.forEach(post => {
        newState[post.id] = post;
      });
      return newState;
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST: 
      newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;