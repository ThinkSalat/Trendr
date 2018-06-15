import { connect } from 'react-redux';

import Followings from './followings';
import { getFollowers } from '../../actions/following_actions';

const mapStateToProps = ({ entities: { users }, session: { id } }, { match : { params: { userId } } }) => {

  if (userId) id = userId;
  return {
    users,
    id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFollowings: id => dispatch(getFollowers(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Followings);