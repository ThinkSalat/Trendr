import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SignUpForm = ({ processForm, history, errors, bg }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    const user = { password, email, username }
    processForm(user).then(res => history.push('/dashboard'));
  }

  function renderErrors() {
    if (errors.length > 4) return <li className='session-form-error'> You do have to fill stuff out, you know.</li>;
    return(
        errors.map((error, i) => (
          <li className='session-form-error' key={`error-${i}`}>
            {error}
          </li>
        ))
    );
  }
  
  return(
    <div className={`session-page ${bg}`}>
      <div className="session-page-form animated fadeInUp">
        <div className="session-page-form-logo"> trendr. </div>
        <div className="session-page-slogan">
            <p>Come for what you love.</p>
            <p>Stay for what you discover.</p>
            <br/>
        </div>
        <form className='session-form' onSubmit={handleSubmit}>
          <input id='top-session-form-input' type='text' placeholder='Username' onChange={e => setUsername(e.currentTarget.value)} value={username}/>
          <input type="text" placeholder="Email" onChange={e => setEmail(e.currentTarget.value)} value={email}/>
          <input type="password" placeholder="Password" onChange={e => setPassword(e.currentTarget.value)} value={password}/>
          <ul className='session-form-error-container animated fadeInUp'>
            {renderErrors()}
          </ul>
          <input type="submit" value="Sign Up" className="session-submit-button"/>
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

export default withRouter(SignUpForm);