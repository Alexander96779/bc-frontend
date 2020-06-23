import React, { Component } from 'react';
import logo from '../../assets/images/logo2.jpg';
import './logo.scss';

class Logo extends Component {
  render() {
    return (
            <div className="logoo">
            <img src={logo} alt="logo" className="logo" />
            </div>
    );
  }
}
export default Logo;
