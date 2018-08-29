import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH = 'SEARCH';

export const search = (query) => dispatch => (
  SearchAPIUtil.search(query).then(res => dispatch(searchActionCreator(res)))
);

const searchActionCreator = res => ({
  type: SEARCH,
  res
})