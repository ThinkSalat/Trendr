import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = ({ entities: { users }, session }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps,mapDispatchToProps)(MainPage);