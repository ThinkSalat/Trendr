import React from 'react';

const Header = ({ currentUser, logout }) => {
  // const header =  <Searchbar />
  //<Navbar /> ;
  if (!currentUser) {
    return (
      <div>header</div>
    );
  } else {
    return (
      <div>
        <div>header</div>
        <button onClick={() => logout()}> Log out </button>
      </div>
    );
  }
};

export default Header;