import React from 'react';

export default class SearchBar extends React.Component {

  render() {
    return(
      <div>
      <input className='searchbar' type="text" placeholder='Search Trendr (Currently not implemented)'/>
      <i className="fas fa-search searchbar-icon"></i>
      </div>
    );
  }
}