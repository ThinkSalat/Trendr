import React from 'react';

export default class SearchBar extends React.Component {

  search(e) {
    e.preventDefault();
    let query = e.currentTarget.value;
    // console.log(query);
  }

  render() {
    return(
      <div>
      <input onInput={this.search} className='searchbar' type="text" placeholder='Search Trendr (in progress)'/>
      <i className="fas fa-search searchbar-icon"></i>
      </div>
    );
  }
}