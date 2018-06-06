import React from 'react';

import SessionPage from "./session/session_page";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
  }

  render() {
    if (this.currentUser) {
      return(<div>logged in</div>)
    } else {
      return(<SessionPage />)
    }
  }

}