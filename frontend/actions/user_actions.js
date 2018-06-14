import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';

export const fetchUser = userId => dispatch => UserAPIUtil.fetchUser(userId).then(data => dispatch(receiveUser(data)));
export const followUser = follow => dispatch => UserAPIUtil.followUser(follow).then( () => dispatch(followUserAction()));
export const unfollowUser = follow => dispatch => UserAPIUtil.unfollowUser(follow).then( () => dispatch(unfollowUserAction()));

const receiveUser = ({ user, posts}) => {
  return({
    type: RECEIVE_USER,
    user,
    posts
  });
};

const followUserAction = () => ({
  type: FOLLOW_USER
});

const unfollowUserAction = () => ({
  type: UNFOLLOW_USER
});