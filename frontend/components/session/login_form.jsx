import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
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
    this.props.processForm(user).then(res => this.props.history.push('/dashboard'));
  }

  renderErrors() {
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
        <div className="session-page-form animated fadeInUp">
        <div className="session-page-form-logo"> trendr. </div>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <input id='top-session-form-input' type="text" placeholder="Username/Email" onChange={this.update('email')} value={this.state.email}/>
            <input type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password}/>

            <ul className='session-form-error-container animated fadeInUp'>
            <li>{this.props.errors[0]}</li>
              {/* {this.renderErrors()} */}
            </ul>

            <input type="submit" value="Log In" className='session-submit-button'/>
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

export default withRouter(LoginForm);