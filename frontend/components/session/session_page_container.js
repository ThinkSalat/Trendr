import { connect } from 'react-redux';
import { clearErrors, login } from '../../actions/session_actions';
import SessionPage from './session_page';

const demoUser = {username: 'Demo User', email: 'Demo@email.com', password: 'password'};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(login(demoUser))
  };
};

export default connect(null, mapDispatchToProps)(SessionPage);
