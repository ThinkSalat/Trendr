import { merge } from 'lodash';

import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { 
  RECEIVE_POST, 
  RECEIVE_POSTS, 
  RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { 
  FOLLOW_USER, 
  UNFOLLOW_USER,
  RECEIVE_FOLLOWERS,
  RECEIVE_FOLLOWED_USERS, 
  REMOVE_FOLLOWERS} from '../actions/following_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_POST:
    case RECEIVE_USER:
    case FOLLOW_USER:
    case UNFOLLOW_USER:
    return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_POSTS:
    case RECEIVE_POSTS:
    case RECEIVE_FOLLOWERS:
    case RECEIVE_FOLLOWED_USERS:
      return merge({},state, action.users);
    case REMOVE_FOLLOWERS:
      return {};
    default:
      return state;
  }
};

export default usersReducer;