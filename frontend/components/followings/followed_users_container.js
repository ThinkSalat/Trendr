import { connect } from 'react-redux';

import Followings from './followings';
import { getFollowedUsers } from '../../actions/following_actions';

const mapStateToProps = ({ entities: { users }, session: { id } }, { match : { params: { userId } } }) => {

  if (userId) id = userId;

  return {
    users,
    id,
    currentUser: users[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFollowings: id => dispatch(getFollowedUsers(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Followings);