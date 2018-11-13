import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ processForm, history, errors, bgClass }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const user = { password, email }
    processForm(user).then(res => history.push('/dashboard'));
  }

  function renderErrors() {
    return(
        errors.map((error, i) => (
          <li className='session-form-error' key={`error-${i}`}>
            {error}
          </li>
        ))
    );
  }
    
  return(
    <div className={`session-page ${bgClass}`}>
      <div className="session-page-form animated fadeInUp">
      <div className="session-page-form-logo"> trendr. </div>
        <form className='session-form' onSubmit={handleSubmit}>
          <input id='top-session-form-input' type="text" placeholder="Username/Email" onChange={e => setEmail(e.currentTarget.value)} value={email}/>
          <input type="password" placeholder="Password" onChange={ e => setPassword(e.currentTarget.value)} value={password}/>

          <ul className='session-form-error-container animated fadeInUp'>
            {renderErrors()}
          </ul>

          <input type="submit" value="Log In" className='session-submit-button'/>
        </form>
        <div className='personal-icons'>
          <a href='https://github.com/ThinkSalat' target='_blank'><i className="fab fa-github-square github"></i></a>
          <a href='https://www.linkedin.com/in/shawnsalat/' target='_blank'><i className="fab fa-linkedin linkedin"></i></a>
          <a href='http://shawnsalat.com/' target='_blank'><i className="fas fa-portrait portfolio"></i></a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);