import React from 'react';

export default class TextForm extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
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
        <input type="text" value={this.state.body} onChange={this.update('body')} placeholder='Body'/>
        <input type="submit" name="" id=""/>
      </form>
    )
  }
}