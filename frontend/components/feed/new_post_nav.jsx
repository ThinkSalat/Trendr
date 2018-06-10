import React from 'react';
import { Link } from 'react-router-dom';

export default class NewPostNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <nav className='new-post-nav'>
        <Link to='/'> 
        {/* text */}
          <i className='logo-text'>&#60023;</i>
          <span>Text</span>
        </Link>
        <Link to='/'> 
        {/* photo */}
          <i className='logo-photo'>&#60019;</i>
          <span>Photo</span>
        </Link>
        <Link to='/'> 
        {/* quote */}
          <i className='logo-quote'>&#60021;</i>
          <span>Quote</span>
        </Link>
        <Link to='/'> 
        {/* link */}
          <i className='logo-link'>&#60016;</i>
          <span>Link</span>
        </Link>
        <Link to='/'> 
        {/* chat */}
          <i className='logo-chat'>&#60012;</i>
          <span>Chat</span>
        </Link>
        <Link to='/'> 
        {/* audio */}
          <i className='logo-audio'>&#60010;</i>
          <span>Audio</span>
        </Link>
        <Link to='/'> 
        {/* video */}
          <i className='logo-video'>&#60025;</i>
          <span>Video</span>
        </Link>
      </nav>
    );
  }
}