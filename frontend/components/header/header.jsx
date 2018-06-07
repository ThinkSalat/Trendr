import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }
  // const header =  <Searchbar />
  //<Navbar /> ;

  animate() {
    //change sprite image
    //tumblr loads all of them in img and then brings them up somehow
    const logoSprites = [
      'https://i.imgur.com/ASFA2Na.png',
      'https://i.imgur.com/EAxlS5G.png',
      'https://i.imgur.com/Xzk6P7w.png',
      'https://i.imgur.com/Gv0N3ub.png',
      'https://i.imgur.com/8SDVH5P.png'
    ];
    const logoSpriteUrl = logoSprites[Math.floor(Math.random()*5)];
    // enter code to animate diff here
  }


  render() {

    if (!this.currentUser) {
      return (
        <div className='header'>
          <Link to="/" onMouseEnter={() => this.animate()} className='header-logo'></Link>
          <div> Search Tumblr</div>
        </div>
      );
    } else {
      return (
        <div className='header'>
          <Link to="/" onMouseEnter={() => this.animate()} className='header-logo'></Link>
          <div>Search Tumblr</div>
          <button onClick={() => this.logout()}> Log out </button>
        </div>
      );
    }
  }
}