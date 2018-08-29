import * as SearchAPIUtil from '../util/search_api_util';

export const SEARCH = 'SEARCH';

export const search = () => dispatch => (
  SearchAPIUtil.search().then(res => dispatch(searchActionCreator(res)))
);

const searchActionCreator = ({results}) => ({
  type: SEARCH,
  results
})