import { connect } from 'react-redux';

import SearchBar from './searchbar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);