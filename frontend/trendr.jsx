//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
//TEST
// import { login, logout, signup } from './actions/session_actions';
//     import { 
//       fetchPosts,
//       fetchPost,
//       createPost,
//       updatePost,
//       deletePost} from './util/post_api_util';

import { 
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost} from './actions/post_actions';

  import { getLikedPosts } from './actions/like_actions';
  // import { fetchUser } from './util/user_api_util';
  import { getFollowedUsers, getFollowers } from './util/following_api_util';
//END TEST


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 
        id: window.currentUser.id,
        currentUser: window.currentUser
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }



//TEST
window.gs = store.getState;
window.dispatch = store.dispatch;
window.post = {post_type: 'text', user_id: 1};
// window.login = login;
// window.logout = logout;
// window.signup = signup;
// window.fetchPosts = fetchPosts;
// window.fetchPost = fetchPost;
// window.createPost = createPost;
// window.updatePost = updatePost;
// window.deletePost = deletePost;

window.fetchPosts = fetchPosts;
window.fetchPost = fetchPost;
window.createPost = createPost;
window.updatePost = updatePost;
window.deletePost = deletePost;
window.getLikedPosts =getLikedPosts;
window.getFollowedUsers = getFollowedUsers;
window.getFollowers = getFollowers;
//END TEST



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
