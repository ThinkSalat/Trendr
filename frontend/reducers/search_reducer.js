import { SEARCH } from '../actions/search_actions';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SEARCH:
      if (!action.results) {
        return {};
      } else {
        return action.results
      }
    default:
      return state;
  }
}

export default searchReducer;