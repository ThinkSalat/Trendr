import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

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


  renderLogout() {
    if (this.props.currentUser){
    return <button onClick={() => this.props.logout()}> Log out </button>
    }
  }

  render() {
      return (
        <div className='header'>
          <Link to="/" onMouseEnter={() => this.animate()} className='header-logo'></Link>
          <div> Search Trendr</div>
          {this.renderLogout.bind(this)()}
        </div>
      );
  }
}

export default withRouter(Header);