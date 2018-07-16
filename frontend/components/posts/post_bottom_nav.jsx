import React from 'react';
import PropTypes from 'prop-types'; 

export default class PostBottomNav extends React.Component {
  constructor(props) {
    super(props);
    props.post.likes = props.post.likes || [];
    this.state = {
      liked: props.post.likes.includes(props.currentUser.id)
    };
  }

  unlikePost() {
    this.props.unlikePost(
      parseInt(this.props.currentUser.id), 
      parseInt(this.props.post.id)
    ).then( succ => {
      this.setState({liked: false});
    })
  }

  likePost() {
    this.props.likePost(parseInt(this.props.currentUser.id), parseInt(this.props.post.id)).then( succ => {
      this.setState({liked: true});
    })
  }

  likeIcon() {
    if (this.state.liked) {
      return <li onClick={() => this.unlikePost()} className='post-control' style={{color: '#d95e40'}}>&#59983;</li>;
    } else if (this.props.currentUser.id === this.props.post.userId) {
      return <li className='post-control'>&#60058;</li>;
    } else if (!this.state.liked) {
      return <li onClick={() => this.likePost()} className='post-control'>&#59982;</li>;
    } else {
      return <li className='post-control'>&#59982;</li>;
    }
  }


  render() {
    return(
      <ul className='post-bottom-nav'>
        <li>{this.props.post.numberNotes} Notes</li>
        <li>
          <ul className='post-bottom-nav-icons'>
            <li className='post-control' alt='Share'>&#59906;</li>
            <li className='post-control'>&#60054;</li>
            <li className='post-control'>&#60047;</li>
            {this.likeIcon()}
          </ul>
        </li>
      </ul>
    );
   }
}

Post.defaultProps = {
  post: {},
  currentUser: {}
}

Post.propTypes = {
  post: PropTypes.object,
  currentUser: PropTypes.object
}