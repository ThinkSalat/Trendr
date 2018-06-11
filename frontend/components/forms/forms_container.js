import { connect } from 'react-redux';

import NewPostForm from './new_post_form';

import { createPost } from '../../actions/post_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewPostForm);

