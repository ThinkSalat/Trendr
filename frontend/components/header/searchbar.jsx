import React from 'react';

export default class SearchBar extends React.Component {

  search(e) {
    e.preventDefault();
    this.props.search(e.currentTarget.value)
  }

  render() {
    const { results } = this.props;
    window.results = results;
    return(
      <div>
        <input onInput={this.search.bind(this)} className='searchbar' type="text" placeholder='Search Trendr (in progress)'/>
        <i className="fas fa-search searchbar-icon"></i>
      </div>
    );
  }
}