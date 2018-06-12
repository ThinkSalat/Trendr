import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_POST:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_POSTS:
      return merge({},state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;