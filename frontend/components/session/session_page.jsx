import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionPage extends React.Component {

  render() {
    return(
      <div className={`session-page`}>
        <div className="session-page-form">
          <div className="session-page-form-logo"> trendr. </div>
          <div className="session-page-slogan">
            <p>Come for what you love.</p>
            <p>Stay for what you discover.</p>
            <br/>
          </div>
          <div>
            <Link to="/signup" onClick={() => this.props.clearErrors()} className="signup-button">Get Started</Link>
          </div>
          
          <div>
            <Link to="/login" onClick={() => this.props.clearErrors()} className="login-button">Log In</Link>
          </div>
          <div>
            <Link to="/dashboard" onClick={() => this.props.demoLogin()} className="demo-button">Demo Login</Link>
          </div>
          {/* //github logo
          //linked in logo
        //website logo */}
        </div>
      </div>
    )
  }
}