import React from 'react';

export default class Followings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFollowings, id } = this.props;
    getFollowings(id);
    //then (succ, err)
  }

  usersArray() {
    return Object.keys(this.props.users).map( id => this.props.users[id])
  }

  render() {
    let { users, id } = this.props;

      users = users || [];
    const userItems = this.usersArray().map( user => (
      <li>
        <ul>
          <li> {user.username} </li>
          <li> {user.title} </li>
          <li> {user.description} </li>
        </ul>
      </li>
    ));

    return(
      <div>
        {userItems}
      </div>
    );
  }
}