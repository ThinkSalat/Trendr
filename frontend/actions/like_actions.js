import * as LikeApiUtil from '../util/like_api_util';

export const UNLIKE_POST = 'UNLIKE_POST';
export const LIKE_POST = 'LIKE_POST';

export const unlikePost = (userId, postId) => dispatch => LikeApiUtil.unlikePost(userId, postId).then( post => dispatch(unlikePostAction(post)));
export const likePost = (userId, postId) => dispatch => LikeApiUtil.likePost(userId, postId).then( post => dispatch(likePostAction(post)));

const unlikePostAction = ({ post }) => {
  return({
    type: UNLIKE_POST,
    post
  })
}

const likePostAction = ({ post }) => {
  return({
    type: LIKE_POST,
    post
  })
}