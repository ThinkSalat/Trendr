import React from 'react';

export default class MainFeed extends React.Component {

  render() {
    return (
      <div className='main-feed-container'>
        <div>main content
          <div>left column
            <div>avatar</div>
            <div>posts nav</div>
            <div>posts feed</div>
            <ul>
              <li>post items</li>
            </ul>
          </div>
        </div>
        <div>right content
          <div>sidebar</div>
        </div>
      </div>
    );
  }
}
