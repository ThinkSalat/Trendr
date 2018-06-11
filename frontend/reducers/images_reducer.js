import { RECEIVE_ALL_POSTS, RECEIVE_POST } from '../actions/post_actions';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.images || {};
    case RECEIVE_POST:
      return action.images || {};
    default:
      return state;
  }
};

export default imagesReducer;