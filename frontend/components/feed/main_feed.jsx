import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

// COMPONENTS 
import TextForm from '../forms/text_form';
import PhotoForm from '../forms/photo_form';
import QuoteForm from '../forms/quote_form';
import LinkForm from '../forms/link_form';
import ChatForm from '../forms/chat_form';
import AudioForm from '../forms/audio_form';
import VideoForm from '../forms/video_form';

import NewPostNavContainer from './new_post_nav_container';

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
                <ProtectedRoute exact path='/new/text' component={TextForm} text={'test'}/>
                <ProtectedRoute exact path='/new/photo' component={PhotoForm}/>
                <ProtectedRoute exact path='/new/quote' component={QuoteForm}/>
                <ProtectedRoute exact path='/new/link' component={LinkForm}/>
                <ProtectedRoute exact path='/new/chat' component={ChatForm}/>
                <ProtectedRoute exact path='/new/audio' component={AudioForm}/>
                <ProtectedRoute exact path='/new/video' component={VideoForm}/>
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
