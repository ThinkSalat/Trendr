import React from 'react';
import { withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      bg: `bg-${Math.floor(Math.random()*28)}`
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then( res => this.props.history.push('/dashboard'));
  }
  renderErrors() {
    if (this.props.errors.length > 4) return <li className='session-form-error'> You do have to fill this stuff out, you know.</li>;
    return(
        this.props.errors.map((error, i) => (
          <li className='session-form-error' key={`error-${i}`}>
            {error}
          </li>
        ))
    );
  }
  
  render() {
    return(
      <div className={`session-page ${this.state.bg}`}>
        <div className="session-page-form">
          <div className="session-page-form-logo"> trendr. </div>
          <div className="session-page-slogan">
              <p>Come for what you love.</p>
              <p>Stay for what you discover.</p>
              <br/>
          </div>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <input id='top-session-form-input' type='text' placeholder='Username' onChange={this.update('username')} value={this.state.username}/>
            <input type="text" placeholder="Email" onChange={this.update('email')} value={this.state.email}/>
            <input type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password}/>
            <ul className='session-form-error-container'>
              {this.renderErrors()}
            </ul>
            <input type="submit" value="Sign Up" className="session-submit-button"/>
          </form>
          <div className='personal-icons'>
            <a href='https://github.com/ThinkSalat' target='_blank'><i className="fab fa-github-square github"></i></a>
            <a href='https://www.linkedin.com/in/shawnsalat/' target='_blank'><i className="fab fa-linkedin linkedin"></i></a>
            <a href='http://thinksalat.com/' target='_blank'><i className="fas fa-portrait portfolio"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);