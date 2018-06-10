import React from 'react';

// COMPONENTS 
import NewPostNavContainer from './new_post_nav_container';

export default class MainFeed extends React.Component {

  render() {
    return (
      <div className='main-feed-container'>
        <div className='main-content'>
          <div className='main-content-feed col-1'>
            <div> user avatar</div>
            <NewPostNavContainer />
            <div className='main-feed'>  {/*  <MainFeedContainer /> */}
              <div>avatar</div>
              <div>post</div>
            </div>
            <ul>
              <li>post items</li>
            </ul>
          </div>
        </div>
        <div className='main-content-sidebar col-2'>
          <div>sidebar</div>
        </div>
      </div>
    );
  }
}
