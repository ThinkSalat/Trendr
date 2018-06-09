import { connect } from 'react-redux';
import MainFeed from './main_feed';


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


export default connect(mapStateToProps, null)(MainFeed);