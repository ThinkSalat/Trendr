import {
  connect
} from 'react-redux';

import NewPostNav from './new_post_nav';

import {
  fetchPost,
  createPost
} from '../../actions/post_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  });
};

const mapDispatchToProps = state => {
  return ({
    fetchPost: id => dispatch(fetchPost(id)),
    createPost: post => dispatch(createPost(post))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostNav);