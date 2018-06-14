import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const fetchUser = userId => dispatch => UserAPIUtil.fetchUser(userId).then(data => dispatch(receiveUser(data)));
export const followUser = follow => dispatch => UserAPIUtil.followUser(follow).then( (user) => dispatch(followUserAction(user)));
export const unfollowUser = follow => dispatch => UserAPIUtil.unfollowUser(follow).then( (user) => dispatch(unfollowUserAction(user)));

const receiveUser = ({ user, posts}) => {
  return({
    type: RECEIVE_USER,
    user,
    posts
  });
};

const followUserAction = (user) => ({
  type: FOLLOW_USER,
  user
});

const unfollowUserAction = (user) => ({
  type: UNFOLLOW_USER,
  user
});