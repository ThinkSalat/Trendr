import { connect } from 'react-redux';

import ExplorePage from './explore_page';
import {fetchRandomPosts} from '../../actions/post_actions';


const mapStateToProps = ({ entities: { posts, users } }, ownProps) => {
  return {
    posts,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRandomPosts: numPosts => dispatch(fetchRandomPosts(numPosts))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ExplorePage);