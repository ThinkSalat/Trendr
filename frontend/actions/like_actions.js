import * as LikeApiUtil from '../util/like_api_util';
import { RECEIVE_ALL_POSTS } from './post_actions';

export const UNLIKE_POST = 'UNLIKE_POST';
export const LIKE_POST = 'LIKE_POST';

export const unlikePost = (userId, postId) => dispatch => LikeApiUtil.unlikePost(userId, postId).then( post => dispatch(unlikePostAction(post)));
export const likePost = (userId, postId) => dispatch => LikeApiUtil.likePost(userId, postId).then( post => dispatch(likePostAction(post)));
export const getLikedPosts = (userId = null) => dispatch => LikeApiUtil.getLikedPosts(userId).then( data => dispatch(receivePosts(data)));

const receivePosts = ({posts, users}) => {
  return({
    type: RECEIVE_ALL_POSTS,
    posts,
    users
  });
};

const unlikePostAction = ({ post }) => {
  return({
    type: UNLIKE_POST,
    post
  });
};

const likePostAction = ({ post }) => {
  return({
    type: LIKE_POST,
    post
  });
};