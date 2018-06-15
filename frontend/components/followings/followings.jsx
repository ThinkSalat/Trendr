import React from 'react';

import FollowingListItem from './following_list_item';
import SideBarContainer from '../feed/side_bar_container';

export default class Followings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const { getFollowings, id } = this.props;
    getFollowings(id).then(succ => window.scrollTo(0, 0));
    //then (succ, err)
  }

  componentWillReceiveProps(newProps) {
    window.scrollTo(0, 0)
    if (newProps.location.pathname !== this.props.location.pathname) {
      const { getFollowings, id } = this.props;
      getFollowings(id).then(succ => window.scrollTo(0, 0));
    }
  }

  usersArray() {
    return Object.keys(this.props.users).map( id => this.props.users[id]);
  }

  followingListItems() {
    return this.usersArray().map( user => (
      <FollowingListItem key={user.id} user={user} currentUser={this.props.currentUser}/>
    ));
  }

  render() {
    return(
      <div className='main-feed-container'>
        <div className='followings-container'>
          {this.followingListItems()}
        </div>
        <div className='main-content-sidebar col-2'>
          <SideBarContainer />
        </div>
      </div>
    );
  }
}