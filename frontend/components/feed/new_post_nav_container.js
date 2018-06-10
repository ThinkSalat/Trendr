import { connect } from 'react-redux';

import NewPostNav from './new_post_nav';

const mapStateToProps = state => {
  return({
    'hey': 'hey'
  });
};

const mapDispatchToProps = state => {
  return({
    'hey': 'hey'
  });
};

export default connect(mapStateToProps,mapDispatchToProps)(NewPostNav);