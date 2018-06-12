import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/post_actions';

import MainFeed from './main_feed';


const mapStateToProps = ({ session, entities: { users, posts } }) => {
  return {
    currentUser: users[session.id],
    posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});


export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);