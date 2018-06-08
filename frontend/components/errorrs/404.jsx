import React from 'react';

export default class fourOhFour extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    bg: `bg-${Math.floor(Math.random()*18)}`
  };
}
  render() {
  return(
    <div className={`error-404 ${this.state.bg}`}>
      <div className='big-text'>
        <h1>
          404
        </h1>
        <h1>
          What're you looking for?
        </h1>
      </div>
    </div>
  );
}
}