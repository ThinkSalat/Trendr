import { connect } from 'react-redux';

import Sidebar from './sidebar';

import { removeFollowers } from '../../actions/following_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFollowers: () => dispatch(removeFollowers())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);