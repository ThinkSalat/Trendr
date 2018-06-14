import React from 'react';

export default class PostBottomNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: props.post.likes.includes(props.currentUser.id)
    };
  }

  likeIcon() {
    if (this.state.liked) {
      console.log('liked');
      return <li className='post-control' style={{color: '#d95e40'}}>&#59983;</li>;
    } else if (this.props.currentUser.id === this.props.post.userId) {
      console.log('own post');
      return <li className='post-control'>&#59982;</li>;
    } else if (!this.state.liked) {
      console.log('unliked');
      return <li className='post-control'>&#59982;</li>;
    } else {
      console.log('not liked, unliked, or users own post');
      return <li className='post-control'>&#59982;</li>;
    }
  }

  render() {
    return(
      <ul className='post-bottom-nav'>
        <li>3,777 Notes</li>
        <li>
          <ul className='post-bottom-nav-icons'>
            <li className='post-control' alt='Share'>&#59906;</li>
            <li className='post-control'>&#60054;</li>
            <li className='post-control'>&#60047;</li>
            {/* show cog for configure post if user's otherwise show like button */}
            {this.likeIcon()}
          </ul>
        </li>
      </ul>
    );
   }
}