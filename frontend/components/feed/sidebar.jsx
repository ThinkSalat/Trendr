import React from 'react';
import {  Link } from 'react-router-dom';


export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='sidebar-container'>
        <ul className='sidebar-links'>
          <li><Link to='/likes'><span className='sidebar-icon' >&#59983;</span><span className='sidebar-text' >Likes</span></Link></li>
          <li><Link to='/followed_users'><span className='sidebar-icon' >&#59992;</span><span className='sidebar-text' >Followed Blogs</span></Link></li>
          <li><Link to='/followers'><span className='sidebar-icon' >&#59972;</span><span className='sidebar-text' >Followers</span></Link></li>
          <li><Link className='disabled-link' onClick={(e) => e.preventDefault()}  to='/'><span className='sidebar-icon' >&#60089;</span><span className='sidebar-text' >Collections</span></Link></li>
        </ul>
      </div>
    );
   }
}