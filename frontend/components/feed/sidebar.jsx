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
          <li><Link to='/likes'>Likes</Link></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
   }
}