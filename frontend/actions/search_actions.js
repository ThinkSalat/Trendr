import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH = 'SEARCH';

export const search = (query) => dispatch => {
  if (query) {
    SearchAPIUtil.search(query).then(res => dispatch(searchActionCreator(res)))
  } else {
    dispatch({type: SEARCH, results: {}})
  }
};

const searchActionCreator = ({results}) => {
    return {
    type: SEARCH,
    results
  }
}