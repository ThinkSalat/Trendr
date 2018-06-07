import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SessionPage from './session_page';

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(null, mapDispatchToProps)(SessionPage);
