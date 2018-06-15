import * as FollowingAPIUtil from '../util/following_api_util';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const RECEIVE_FOLLOWERS = 'RECEIVE_FOLLOWERS';
export const RECEIVE_FOLLOWED_USERS = 'RECEIVE_FOLLOWED_USERS';

export const followUser = follow => dispatch => FollowingAPIUtil.followUser(follow).then( (user) => dispatch(followUserAction(user)));
export const unfollowUser = follow => dispatch => FollowingAPIUtil.unfollowUser(follow).then( (user) => dispatch(unfollowUserAction(user)));
export const getFollowers = id => dispatch => FollowingAPIUtil.getFollowers(id).then( users => dispatch({type: RECEIVE_FOLLOWERS, users}));
export const getFollowedUsers = id => dispatch => FollowingAPIUtil.getFollowedUsers(id).then( users => dispatch({type: RECEIVE_FOLLOWED_USERS, users}));

const followUserAction = ({user}) => ({
  type: FOLLOW_USER,
  user
});

const unfollowUserAction = ({user}) => ({
  type: UNFOLLOW_USER,
  user
});