import { connect } from 'react-redux';

import FollowingButton from './following_button';

const mapStateToProps = (state, { currentUser, userId}) => {
  return {
    currentUser,
    userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // followUser: (follower_id, followed_id) => dispatch(followUser(follower_id, followed_id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(FollowingButton);