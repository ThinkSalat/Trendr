import React from 'react';
import { Link } from 'react-router-dom';

export default class NewPostNav extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'here are the props');
  }

  render() { 
    let formStatus;
    if (this.props.location.pathname === '/dashboard') {
      formStatus = 'form-closed';
    }
    return(
      <nav className={`new-post-nav ${formStatus}`}>
        <Link to='/new/text'> 
          <i className='logo-text'>&#60023;</i>
          <span>Text</span>
        </Link>
        <Link to='/new/photo'> 
          <i className='logo-photo'>&#60019;</i>
          <span>Photo</span>
        </Link>
        <Link to='/new/quote'> 
          <i className='logo-quote'>&#60021;</i>
          <span>Quote</span>
        </Link>
        <Link to='/new/link'> 
          <i className='logo-link'>&#60016;</i>
          <span>Link</span>
        </Link>
        <Link to='/new/chat'> 
          <i className='logo-chat'>&#60012;</i>
          <span>Chat</span>
        </Link>
        <Link to='/new/audio'> 
          <i className='logo-audio'>&#60010;</i>
          <span>Audio</span>
        </Link>
        <Link to='/new/video'> 
          <i className='logo-video'>&#60025;</i>
          <span>Video</span>
        </Link>
      </nav>
    );
  }
}