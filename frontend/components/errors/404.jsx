import React from 'react';

export default class fourOhFour extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    bg: `bg-${Math.floor(Math.random()*37)}`
  };
}
  render() {
  return(
    <div className={`error-404 ${this.state.bg}`}>
      <div className='big-text'>
        <h1>
          There's nothing here.
        </h1>
        <h3>
          Whatever you were looking for doesn't currently exist at this address. Unless you were looking for this error page, in which case: Congrats! You totally found it.
        </h3>
      </div>
    </div>
  );
}
}