import { connect } from 'react-redux';

import PostBottomNav from './post_bottom_nav';
import { unlikePost, likePost } from '../../actions/like_actions';

const mapStateToProps = ({entities: { posts, users }, session: { id } }, { postId }) => {
  const post = posts[postId];
  const currentUser = users[id];
  return {
    post,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    likePost: (userId, postId) => dispatch(likePost(userId, postId)),
    unlikePost: (userId, postId) => dispatch(unlikePost(userId, postId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PostBottomNav);