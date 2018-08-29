import { connect } from 'react-redux';

import SearchBar from './searchbar';
import { search } from '../../actions/search_actions'

const mapStateToProps = ({ search: {results} }) => {
  return {
    results
  };
};

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(search(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);