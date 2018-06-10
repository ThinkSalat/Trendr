import {
  connect
} from 'react-redux';

import NewPostNav from './new_post_nav';

import {
  fetchPost,
  createPost
} from '../../actions/post_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPost: id => dispatch(fetchPost(id)),
    createPost: post => dispatch(createPost(post))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostNav);