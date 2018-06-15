import React from 'react';
import { Link } from 'react-router-dom';

import FollowingButton from '../users/following_button_container';

export default class FollowingListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  followsYou() {
    return this.props.user ? 'follows-you' : 'not-follows-you';
  }

  render() {
    const { user } = this.props;
    return(
      <li className='following-list-item'>
          <ul className='following-list-item-details'>
            <Link className='link-wrapper' to={`/users/${user.id}`}>
              <div className='following-avatar'> <img src={user.avatar}></img> </div>
              <li className='following-list-title'> {user.title} </li>
              <li className='following-list-username'> {user.username} 
                {/* <span className={`${this.followsYou()} following-list-follows-you`}>Follows You</span> */}
              </li>
            </Link>
            <li className='following-switcher-container'><FollowingButton currentUser={this.props.currentUser} userId={user.id} /></li>
        </ul>
      </li>
    );
   }
}