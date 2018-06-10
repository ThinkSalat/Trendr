import React from 'react';

export default class LinkForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <form >
        Text: <input type="text" />
        <input type="submit" name="" id=""/>
      </form>
    )
  }
}