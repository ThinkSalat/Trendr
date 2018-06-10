import React from 'react';

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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();

    this.props.form_submit_action(this.state);
    // .then( do something )
    // .catch( error handling )
  }

  update(field) {    
    return e => { 
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.update('title')} placeholder='Title'/>
        <input type="text" value={this.state.body} onChange={this.update('body')} placeholder='Your text here'/>

        <input type="submit" name="" id=""/>
      </form>
    );
   }
}