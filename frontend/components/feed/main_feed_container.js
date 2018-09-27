import { connect } from 'react-redux';

import { fetchPosts, fetchNextPosts } from '../../actions/post_actions';

import MainFeed from './main_feed';


const mapStateToProps = ({ session, entities: { users, posts } }) => {
  return {
    currentUser: users[session.id],
    posts
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  loadNextPosts: (offset, date) => dispatch(fetchNextPosts(offset, date))
});


export default connect(mapStateToProps, mapDispatchToProps)(MainFeed);