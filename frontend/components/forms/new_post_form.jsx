import React from 'react';
import Dropzone from 'react-dropzone';
import { debug } from 'util';

export default class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      summary: '',
      post_type: this.props.postType,
      user_id: this.props.currentUser.id,
      private: this.props.currentUser.private_posts,
      photoset_layout: '',
      source_url: '',
      source_title: '',
      slug: '',
      state: 'unpublished',
      photos: [],
      images: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const focusedInput = document.getElementById('new-post-form-title');
    focusedInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const post = this.state;
    post.state = 'published';
    this.props.submitPost(post)
      .then(this.props.history.push('/'));
      // might handle errors here
  }

  update(field) {    
    return e => { 
      this.setState({[field]: e.target.value});
    };
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const photos = [...this.state.photos, ...acceptedFiles];
    const images = photos.map
    this.setState({ photos, images });
   }



  render() {
    const photoPreviews = this.state.photos.map((photo, i) => {
      return (
        <li  key={i}>
          <img className='photo-upload-preview' src={photo.preview}/>
        </li>
      );
    });


    let dropzoneStyle;
    if (photoPreviews.length) {
      dropzoneStyle = 'small-dropzone';
    } else {
      dropzoneStyle = 'large-dropzone';
    }

    switch(this.props.postType) {
      case 'photo':
        return(
          <form  className='post-form-container' onSubmit={this.handleSubmit}>
            <ul> {photoPreviews}</ul>
            <Dropzone className={dropzoneStyle} onDrop={(files) => this.onDrop(files)} accept={'image/*'}>
              <div className='file-upload-container'>
                <div className='file-upload-icon'>&#60027;</div>
              </div>
            </Dropzone>
            <textarea id={'new-post-form-title'} type="text" value={this.state.title} onChange={this.update('title')} placeholder='Add a caption, if you like'/>
            <input type="submit" name="" id=""/>
          </form>
        );
      default: 
        return(
          <form  className='post-form-container' onSubmit={this.handleSubmit}>
          <textarea id={'new-post-form-title'} type="text" value={this.state.title} onChange={this.update('title')} placeholder='Title'/>
          <textarea type="text" value={this.state.body} onChange={this.update('body')} placeholder='Your text here'/>
          <input type="submit" name="" id=""/>
        </form>
        )
    }

    
   }
}