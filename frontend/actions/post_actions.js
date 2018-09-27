import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_NEXT_POSTS = 'RECEIVE_NEXT_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = () => dispatch => (
  PostAPIUtil.fetchPosts().then(res => dispatch(receivePosts(res)))
);
export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId).then(res => dispatch(receivePost(res)))
);
export const createPost = post => dispatch => (
  PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)))
);
export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);
export const deletePost = postId => dispatch => (
  PostAPIUtil.deletePost(postId).then(post => dispatch(removePost(post.id)))
);
export const fetchRandomPosts = numPosts => dispatch => (
  PostAPIUtil.fetchRandomPosts(numPosts).then(res => dispatch(receivePosts(res)))
);
export const fetchNextPosts = (offset, date) => dispatch => (
  PostAPIUtil.fetchPosts(null, offset, date).then(res => dispatch(addPostsToState(res)))
);

const receivePosts = ({ posts, users }) => ({
  type: RECEIVE_POSTS,
  posts,
  users
})

const addPostsToState = ({ posts, users }) => ({
  type: RECEIVE_NEXT_POSTS,
  posts,
  users
})

const receivePost = ({ post, user }) => {
  return {
  type: RECEIVE_POST,
  post,
  user
}};
const removePost = postId => ({
  type: REMOVE_POST,
  postId
});