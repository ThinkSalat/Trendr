import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.currentUser;
  }

  render() {
    return(
      <div className="session-page">
        <div className="session-page-form">
          <div className="session-page-form-logo"/>
          <div className="session-page-slogan">
            <p>Come for what you love.</p>
            <p>Stay for what you discover.</p>
            <br/>
          </div>
          <div>
            <Link to="/signup" className="signup-button">Get Started</Link>
          </div>
          <div>
            <Link to="/login" className="login-button">Log In</Link>
          </div>
          {/* //github logo
          //linked in logo
        //website logo */}
        </div>
      </div>
    )
  }
}