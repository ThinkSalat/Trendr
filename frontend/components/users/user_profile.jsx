import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

import ProfilePostContainer from '../posts/profile_post_container';
import FollowingButtonContainer from './following_button_container';
import SideBarContainer from '../feed/side_bar_container';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true,
      loadingInfiniteScroll: false,
      offset: 0,
      date: new Date()
    };
  }

  onScroll() {
    if($(window).scrollTop() + $(window).height() == $(document).height() && !this.state.loadingInfiniteScroll) {
     this.setState( { loadingInfiniteScroll: true }, _ =>
      this.props.fetchNextPostsFromUser(this.props.userId, this.state.offset).then( _ => {
       setTimeout(this.setState( {
         loadingInfiniteScroll: false,
         offset: this.state.offset + 5
       }), 200)
     }))
   }
 }

 componentDidMount() {
   window.scrollTo(0, 0)
   window.addEventListener('scroll', this.onScroll.bind(this), false);
    this.props.fetchUser(this.props.userId)
      .then( 
        succ =>   window.scrollTo(0, 0),
        err => this.setState({isAvailable: false})
      );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll.bind(this), false);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.fetchUser(newProps.userId)
      .then( 
        () => window.scrollTo(0, 0), 
        () => this.setState({isAvailable: false})
      );
    }
  }

  profileEmpty() {
    if (Object.keys(this.props.posts).length === 0) {
      // make main content left: 0px;
      return '';
    } else {
      return 'not-empty';
    }
  }

  loading() {
    if (this.state.loadingInfiniteScroll) {
     return (
      <div className='feed-loading-bar-container-user animate'>
        <div className="feed-loading-bar"></div>
        <div className="feed-loading-bar"></div>
        <div className="feed-loading-bar"></div>
      </div>
     )
    }
  }

  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to={`/404/users/${this.props.match.params.userId}`} />
      );
    }
   
    let { posts, user } = this.props;

    const postComponents = Object.keys(posts).sort((a,b) => b-a).map( id => {
      let post = posts[id];
      return <li key={post.id}>
        <ProfilePostContainer post={post} author={this.props.user}/>
      </li>;
    });

    return(
      <div className='main-feed-container'>
        <div className={`user-profile-container ${this.profileEmpty()}`}>
          <ul className='user-profile-info-container-container'>
            <li className='user-profile-info-container'>
              <ul className='user-profile-nav'>
                <li><img className='large-avatar' src={this.props.user.avatar} alt={this.props.user.username} /></li>
                <li>
                  <FollowingButtonContainer currentUser={this.props.currentUser} userId={this.props.userId} />
                </li>
                <li>
                  <Link className='likes-link' to={`/users/${this.props.userId}/likes`}>Likes </Link> </li> <li>
                  <Link className='followers-link' to={`/users/${this.props.userId}/followers`}>Followers </Link> </li> <li>
                  <Link className='followed-users-link' to={`/users/${this.props.userId}/followed_users`}>Followed Users</Link>
                    </li> </ul> <ul className='user-profile-info'>
                <li>{this.props.user.title}</li>
                <li dangerouslySetInnerHTML={{ __html: this.props.user.description}}></li>
                {/* followers, following, likes etc. num followers could go here */}
                {/* last post created at date */}
              </ul>
            </li>
            <ul>
              {postComponents}
            </ul>
            {this.loading()}
          </ul>
        </div>
        <div className='main-content-sidebar col-2'>
          <SideBarContainer />
        </div>
      </div>
    );
   }
}

UserProfile.defaultProps = {
  posts: {},
  user: {},
  currentUser: {}
}

UserProfile.propTypes = {
  posts: PropTypes.object,
  user: PropTypes.object,
  currentUser: PropTypes.object,
  userId: PropTypes.number,
}