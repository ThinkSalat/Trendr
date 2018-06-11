import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isAvailable: true,
      post: this.props.post
    };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
      .then( null, err => this.setState({isAvailable: false}));
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.postId !== this.props.postId) {
      this.props.fetchPost(newProps.postId)
      .then( null, err => this.setState({isAvailable: false}));
    }
  }
  
  render() {
    if (!this.state.isAvailable) {
      return(
        <Redirect to="/404" />
      );
    }

    let { post, author, images } = this.props;

    images = images.map((image,i) => (
      <li key={i} className='photoset-photo'>
        <img src={image.url}/>
      </li>
    ));
    return(
      <div className={`post-container`}>
        <div>
          <div>
            <ul>
              <li>post header. Author of post: {author.username}</li>
              <li>
                <ul>
                  {images}
                </ul>
              </li>
              <li>post title: {post.title}</li>
              <li>post description/summary/body: {post.body || post.summary}</li>
              <li>post nav: Component goes here </li>
            </ul>
          </div>
        </div>
      </div>
    );
   }
}