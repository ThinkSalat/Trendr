import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
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
      <div className="session-page">
        <div className="session-page-form">
        <div className="session-page-form-logo"> trendr. </div>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <input id='top-session-form-input' type="text" placeholder="Username/Email" onChange={this.update('email')} value={this.state.email}/>
            <input type="password" placeholder="Password" onChange={this.update('password')} value={this.state.password}/>

            <ul className='session-form-error-container'>
              {this.renderErrors()}
            </ul>

            <input type="submit" value="Log In" className='session-submit-button'/>
          </form>
            {/* //github logo
            //linked in logo
            //website logo */}
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);