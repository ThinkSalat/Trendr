import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout, clearErrors } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));