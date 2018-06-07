import React from 'react';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }
  // const header =  <Searchbar />
  //<Navbar /> ;
  render() {
    if (!this.currentUser) {
      return (
        <div className='header'>
          <div onHover={() => this.animate} className='header-logo'></div>
          <div>header</div>
        </div>
      );
    } else {
      return (
        <div className='header'>
          <div onHover={() => this.animate()} className='header-logo'></div>
          <div>header</div>
          <button onClick={() => this.logout()}> Log out </button>
        </div>
      );
    }
  }
}