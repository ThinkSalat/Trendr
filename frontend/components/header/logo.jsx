import React from 'react';
import { Link } from 'react-router-dom';
import { log } from 'util';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      logoClass: `header-logo`
    };
    // this.animate = this.animate.bind(this);
  }

  animate() {
  this.setState({logoClass: `logo-sprites-${[Math.floor(Math.random()*4)]}`});
  }

  stopAnimate() {

  }

  render() {

    return(
      <Link to="/" onMouseEnter={this.animate.bind(this)} onMouseLeave={this.stopAnimate.bind(this)} className={`header-logo`}></Link>
    );
  }
}