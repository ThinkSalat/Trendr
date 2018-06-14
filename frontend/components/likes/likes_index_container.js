import { connect } from 'react-redux';

import LikesIndex from './likes_index';
import { getLikedPosts } from '../../actions/like_actions';

const mapStateToProps = ({entities: { posts, users }, session: { id } }, { match: { params: { userId } }  }) => {
  // posts = posts || {};
  const currentUser = users[id];
  return {
    posts,
    currentUser,
    userId,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLikedPosts: (userId=null) => dispatch(getLikedPosts(userId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LikesIndex);