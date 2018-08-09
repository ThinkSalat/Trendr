import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderNav from './header_nav';
import {fetchRandomPosts} from '../../actions/post_actions';


const mapStateToProps = ({ entities: { users }, session: { id } }, ownProps) => {
  return {
    userId: id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRandomPosts: numPosts => dispatch(fetchRandomPosts(numPosts))
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HeaderNav));