import { connect } from 'react-redux';

import PostBottomNav from './post_bottom_nav';

const mapStateToProps = ({entities: { posts, users }, session: { id } }, { postId }) => {
  const post = posts[postId] || {};
  const currentUser = users[id] || {};
  return {
    post,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // likePost: ,
    // unlikePost: ,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PostBottomNav);