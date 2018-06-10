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
                <ProtectedRoute exact path='/new/text' render={() => <FormContainer postType={'text'}/>}/>
                <ProtectedRoute exact path='/new/photo' render={() => <FormContainer postType={'photo'}/>}/>
                <ProtectedRoute exact path='/new/quote' render={() => <FormContainer postType={'quote'}/>}/>
                <ProtectedRoute exact path='/new/link' render={() => <FormContainer postType={'link'}/>}/>
                <ProtectedRoute exact path='/new/chat' render={() => <FormContainer postType={'chat'}/>}/>
                <ProtectedRoute exact path='/new/audio' render={() => <FormContainer postType={'audio'}/>}/>
                <ProtectedRoute exact path='/new/video' render={() => <FormContainer postType={'video'}/>}/>
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
