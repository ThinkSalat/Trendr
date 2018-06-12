import { connect } from 'react-redux';

import NewPostForm from './new_post_form';

import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({ session, entities: {users}}) => {
  return {
    currentUser: users[session.id] || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitPost: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(NewPostForm);

