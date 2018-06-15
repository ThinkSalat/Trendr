import React from 'react';

import FollowingButton from '../users/following_button_container';

export default class FollowingListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return(
      <li className='following-list-item'>
        <ul className='following-list-item-details'>
          <li className='following-list-title'> {user.title} </li>
          <li className='following-list-username'> {user.username} </li>
          <li className='following-switcher-container'><FollowingButton currentUser={this.props.currentUser} userId={user.id} /></li>
        </ul>
      </li>
    );
   }
}