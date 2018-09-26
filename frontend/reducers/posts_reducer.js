import { merge } from 'lodash';

import { 
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_POSTS,
  RECEIVE_NEXT_POSTS } from '../actions/post_actions';
import { RECEIVE_USER, RECEIVE_NEXT_POSTS_FROM_USER } from '../actions/user_actions';
import { UNLIKE_POST, LIKE_POST } from '../actions/like_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POSTS:
    case RECEIVE_USER:
      return action.posts || {};
    case RECEIVE_NEXT_POSTS:
    case RECEIVE_NEXT_POSTS_FROM_USER:
      return merge({}, state, action.posts)
    case RECEIVE_POST:
    case UNLIKE_POST:
    case LIKE_POST:
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