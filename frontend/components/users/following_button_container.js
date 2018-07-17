import { connect } from 'react-redux';

import { followUser, unfollowUser } from '../../actions/following_actions';
import FollowingButton from './following_button';

const mapStateToProps = ({ entities: { users }, session: { id } },{ userId }) => {
  const currentUser = users[id];
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