import React from 'react';

export default class SearchBar extends React.Component {

  search(e) {
    e.preventDefault();
    let query = e.currentTarget.value;
    // console.log(query);
    // pass to rails
    window.search = this.props.search
    this.props.search(query).then( res => {
      debugger
    }, res => {
      debugger
    })
  }

  render() {
    return(
      <div>
        <input onInput={this.search.bind(this)} className='searchbar' type="text" placeholder='Search Trendr (in progress)'/>
        <i className="fas fa-search searchbar-icon"></i>
      </div>
    );
  }
}