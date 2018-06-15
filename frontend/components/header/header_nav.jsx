import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  isActive(path) {
    if (this.props.location.pathname.slice(0,5) === '/new/' && path === '/dashboard'){
      return 'active';
    }
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }

  userProfile() {
    return `/users/${this.props.userId}`;
  }

  render() {
    return(
      <div className='header-nav'>
        <Link to='/' className={this.isActive('/dashboard')} >&#59980;</Link>
        <Link to='/explore' className={this.isActive('/explore')} >&#59963;</Link>
        <Link to='#' className={this.isActive()} >&#59990;</Link>
        <Link to='#' className={this.isActive()} >&#59996;</Link>
        <Link to='#' className={this.isActive()} >&#59905;</Link>
        <Link to={this.userProfile()} className={this.isActive(this.userProfile())} >&#60070;</Link>
      </div>
    );
   }
}