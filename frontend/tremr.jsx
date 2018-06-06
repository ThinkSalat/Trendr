//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//TEST
import * as SessionApiUtil from './util/session_api_util';
import * as SessionAction from './actions/session_actions';


//END TEST


document.addEventListener('DOMContentLoaded', () => {
//TEST

// window.login = SessionApiUtil.login;
window.signup = SessionApiUtil.signup;
window.logout = SessionApiUtil.logout;


window.login = SessionAction.login;
//END TEST



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
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
