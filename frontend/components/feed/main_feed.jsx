import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import NewPostNavContainer from './new_post_nav_container';
import FormContainer from '../forms/forms_container';

export default class MainFeed extends React.Component {

  render() {
    return (
      <div className='main-feed-container'>
        <div className='main-content'>
          <div className='main-content-feed col-1'>
            <div> user avatar</div>
            <img className='test' src="/images/post_type_div.png" alt=""/>
              <NewPostNavContainer />
              <Switch>
                <ProtectedRoute exact path='/new/text' component={(props) => <FormContainer {...props} postType={'text'} />}  />
                <ProtectedRoute exact path='/new/photo' component={(props) => <FormContainer {...props} postType={'photo'} />}  />
                <ProtectedRoute exact path='/new/quote' component={(props) => <FormContainer {...props} postType={'quote'} />}  />
                <ProtectedRoute exact path='/new/link' component={(props) => <FormContainer {...props} postType={'link'} />}  />
                <ProtectedRoute exact path='/new/chat' component={(props) => <FormContainer {...props} postType={'chat'} />}  />
                <ProtectedRoute exact path='/new/audio' component={(props) => <FormContainer {...props} postType={'audio'} />}  />
                <ProtectedRoute exact path='/new/video' component={(props) => <FormContainer {...props} postType={'video'} />}  />
              </Switch>
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
