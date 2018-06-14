import { connect } from 'react-redux';

import { followUser, unfollowUser } from '../../actions/user_actions';
import FollowingButton from './following_button';

const mapStateToProps = (state, { currentUser, userId}) => {
  return {
    currentUser,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: (follow) => dispatch(followUser(follow)),
    unfollowUser: (follow) => dispatch(unfollowUser(follow))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FollowingButton);