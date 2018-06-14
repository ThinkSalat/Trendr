import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const fetchUser = userId => dispatch => UserAPIUtil.fetchUser(userId).then(data => dispatch(receiveUser(data)));

const receiveUser = ({ user, posts}) => {
return({
  type: RECEIVE_USER,
  user,
  posts
});}