import React from 'react';
import { Link } from 'react-router-dom';

export default class NewPostNav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <nav className='new-post-nav'>
        <Link to='/posts/new'>
          <i className='logo-text'>&#60023;</i>
          <span>Text</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-photo'>&#60019;</i>
          <span>Photo</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-quote'>&#60021;</i>
          <span>Quote</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-link'>&#60016;</i>
          <span>Link</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-chat'>&#60012;</i>
          <span>Chat</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-audio'>&#60010;</i>
          <span>Audio</span>
        </Link>
        <Link to='/posts/new'>
          <i className='logo-video'>&#60025;</i>
          <span>Video</span>
        </Link>
      </nav>
    );
  }
}