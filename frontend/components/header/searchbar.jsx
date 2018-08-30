import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {
  render() {
    const { user } = this.props
    return (
      <Link to={`/users/${user.id}`}>
        <li className="search-result-item" key={user.id}> 
            <div>{user.title || user.username}</div> <img src={user.avatar} className="search-result-avatar"/> 
        </li>
      </Link>
    )
  }
}

export default class SearchBar extends React.Component {

  search(e) {
    e.preventDefault();
    this.props.search(e.currentTarget.value)
  }

  displayResults() {
    let { results } = this.props;
    if (!Object.keys(results).length) {
      return null;
    } else {
      return Object.values(results).map ( user => {
        return <SearchResultItem user={user}/>
      })
    }
  }

  render() {
    return(
      <div>
        <input onInput={this.search.bind(this)} className='searchbar' type="text" placeholder='Search Trendr'/>
        <i className="fas fa-search searchbar-icon"></i>
        <div className="search-results">
          <ul className='search-results'>
            {this.displayResults()}
          </ul>
        </div>
      </div>
    );
  }
}