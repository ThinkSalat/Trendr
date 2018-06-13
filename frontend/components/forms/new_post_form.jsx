import React from 'react';
import Dropzone from 'react-dropzone';
import { merge } from 'lodash';

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
      images: [],
      uploaded_image_urls: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const focusedInput = document.getElementById('new-post-form-title');
    focusedInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = merge({},this.state);
    post.state = 'published';
    const data = new FormData();

    Object.keys(this.state).map(key => {
      if (key !== 'images') {
        return data.append(key,this.state[key]);
      } 
    });

    this.state.images.forEach(image => data.append('images[]', image));

    this.props.submitPost(data)
      .then(this.props.history.push('/'));
      // might handle errors here
  }

  update(field) {    
    return e => this.setState({[field]: e.target.value});
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const images = [...this.state.images, ...acceptedFiles];
    this.setState({ images });
   }

   selfieCam() {
    var video = document.getElementById('selfie-cam');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
     video.src = window.URL.createObjectURL(stream);
     video.play();
     });
    }
   }

  renderImageUrlPreviews() {
      return this.state.images.map((photo, i) => <li key={i}><img className='photo-upload-preview' src={photo.preview}/></li>);
  }

   renderImageUploadPreviews() {
      return this.state.images.map((photo, i) => (
          <li key={i}>
            <img className='photo-upload-preview' src={photo.preview}/>
          </li>
        ));
   }

  render() {
    let photoPreviews; 

    if (this.state.images.length) {
      photoPreviews = this.renderImageUploadPreviews();
    } else {
      photoPreviews = this.renderImageUrlPreviews();
    }

    let dropzoneStyle, urlStyle, hidden, photoUploadCellStyle, addAnotherPhoto;
    if (photoPreviews.length) {
      dropzoneStyle = 'small-dropzone';
      urlStyle = 'hidden-photo-upload';
      hidden = 'hidden-photo-upload';
      photoUploadCellStyle = 'small-photo-upload-cell';
      addAnotherPhoto = 'Add Another';
    } else {
      dropzoneStyle = 'large-dropzone';
      urlStyle = 'photo-url-upload';
      photoUploadCellStyle = 'photo-upload-cells';
    }

    switch(this.props.postType) {
      case 'photo':
        return(
          <form  className='post-form-container animated slideDownIn' onSubmit={this.handleSubmit}>
            <ul> {photoPreviews}</ul>
            <div className={photoUploadCellStyle}>
              <Dropzone className={dropzoneStyle} onDrop={(files) => this.onDrop(files)} accept={'image/*'}>
                <div className='file-upload-container'>
                  <div className='file-upload-icon'>&#60027; <span>{addAnotherPhoto}</span> </div>
                  <div className={hidden}>Upload Image</div>
                  <div className={`selfie-upload ${hidden}`} onClick={() => this.selfieCam()}>:)</div>
                </div>
              </Dropzone>
              <div className={urlStyle}>
                <div className={`file-upload-container ${hidden}`}>
                  <div className='file-upload-icon'>&#60036;</div>
                  <div className={hidden}>Upload from Url</div>
                </div>
              </div>
            </div>
            <textarea id={'new-post-form-title'} type="text" value={this.state.title} onChange={this.update('title')} placeholder='Add a caption, if you like'/>
            <input   className='submit-button' type="submit" disabled={!this.state.images.length}/>
          </form>
        );
      case 'text': 
        return(
          <form  className='post-form-container' onSubmit={this.handleSubmit}>
            <textarea id={'new-post-form-title'} type="text" value={this.state.title} onChange={this.update('title')} placeholder='Title'/>
            <textarea type="text" value={this.state.body} onChange={this.update('body')} placeholder='Your text here'/>
            <input  className='submit-button'  type="submit" disabled={!(['title', 'body', 'summary'].some( el => this.state[el]))}/>
          </form>
        );
      default:
        return(
          <div id='new-post-form-title'>
            Not implemented yet!
          </div>
        );
    }
   }
}