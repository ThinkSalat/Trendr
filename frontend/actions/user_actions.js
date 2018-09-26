import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_NEXT_POSTS_FROM_USER = 'RECEIVE_NEXT_POSTS_FROM_USER';

export const fetchUser = (userId, offset = 0) => dispatch => UserAPIUtil.fetchUser(userId, offset).then(data => dispatch(receiveUser(data)));
export const fetchNextPostsFromUser = (userId, offset) => dispatch => UserAPIUtil.fetchUser(userId, offset).then(data => dispatch(receiveNextPostsFromUser(data)));

const receiveUser = ({ user, posts}) => {
  return({
    type: RECEIVE_USER,
    user,
    posts
  });
};
const receiveNextPostsFromUser = ({ user, posts}) => {
  return({
    type: RECEIVE_NEXT_POSTS_FROM_USER,
    user,
    posts
  });
};
