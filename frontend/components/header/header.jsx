import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SearchBarContainer from './searchbar_container';
import Logo from './logo';

class Header extends React.Component {

  //conditionally render navbar
  renderHeaderSessionButton() {
    switch (this.props.location.pathname){
      // case '/dashboard':
      //   return <button className='header-session-link' onClick={() => this.props.logout()}> Log out </button>;
      case '/signup':
        return <Link className='header-session-link' to='/login' onClick={() => this.props.clearErrors()} > Log in </Link>;
      case '/login':
        return <Link className='header-session-link' to='/signup' onClick={() => this.props.clearErrors()} > Sign Up </Link>;
      default:
        if (this.props.currentUser) {
          return <button className='header-session-link' onClick={() => this.props.logout()}> Log out </button>;
        } else {
          return;
        }
    }  
  }

  render() {
      return (
        <div className={`header-container ${this.props.currentUser ? "logged-in" : "" }`}>
          <div className='header-left'>
          {/* below is the basic way to get logo sprites working. doesn't work yet */}
            {/* <Link to="/" onMouseEnter={() => this.animate()} className='header-logo'></Link> */}
            <Logo />
            <SearchBarContainer />
          </div>
          <div className='header-right'>
            {this.renderHeaderSessionButton.bind(this)()}
          </div>
        </div>
      );
  }
}

export default withRouter(Header);