//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { 
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost} from './util/post_api_util';
//TEST
import { login, logout, signup } from './actions/session_actions';

//END TEST


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
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
window.login = login;
window.logout = logout;
window.signup = signup;
window.fetchPosts = fetchPosts;
window.fetchPost = fetchPost;
window.createPost = createPost;
window.updatePost = updatePost;
window.deletePost = deletePost;
//END TEST



  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
