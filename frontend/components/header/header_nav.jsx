import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);
  }

  isActive(path) {
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }

  render() {
    return(
      <div className='header-nav'>
        <Link to='#' className={this.isActive('/dashboard')} >&#59980;</Link>
        <Link to='#' className={this.isActive()} >&#59963;</Link>
        <Link to='#' className={this.isActive()} >&#59990;</Link>
        <Link to='#' className={this.isActive()} >&#59996;</Link>
        <Link to='#' className={this.isActive()} >&#59905;</Link>
        <Link to='#' className={this.isActive()} >&#60070;</Link>
      </div>
    );
   }
}