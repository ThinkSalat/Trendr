import React from 'react';

export default class Post extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }
  
  componentWillReceiveProps(newProps) {
    if (newProps.postId !== this.props.postId) {
      this.props.fetchPost(newProps.postId);
    }
  }
  
  render() {



    const post = this.props.post;

    return(
      <div className={`post-container`}>
        <div>
          <div>
            <ul>
              <li>post header</li>
              <li>post medias</li>
              <li>post title</li>
              <li>post description</li>
              <li>post nav</li>
            </ul>
          </div>
        </div>
      </div>
    );
   }
}