import React from 'react';

// COMPONENTS 
import NewPostNavContainer from './new_post_nav_container';

export default class MainFeed extends React.Component {

  render() {
    return (
      <div className='main-feed-container'>
        <div>main content
          <div>left column
            <div>avatar</div>
            {/* <NewPostNavContainer /> */}
            <div>posts feed</div>
            <ul>
              <li>post items</li>
              <li className='icons'>&#60019;</li>
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
