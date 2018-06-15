import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderNav from './header_nav';

const mapStateToProps = ({ entities: { users }, session: { id } }, ownProps) => {
  return {
    userId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HeaderNav));