import { connect } from 'react-redux';

import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const posts = posts || {};
  const user = user || {};
  return {
    posts,
    user
  };
};
//fetchUser gets their posts
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);