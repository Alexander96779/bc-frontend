import React, { Component } from 'react';
import Avatar from './ProfileAvatar';
import './styles/editProfileSideBar.scss';
import defaultImg from '../../assets/images/profile.jpeg';

class EditProfileSideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <div className="sideBar__avatar">
          <Avatar src={ defaultImg} />
        </div>
        <label className="sideBar__change" htmlFor="input-file">
          change profile
          <input
            type="file"
            id="input-file"
            className="sideBar__change___file"
            onChange={this.handleChange}
          />
        </label>
        <p className="sideBar__text">
          <strong>Email: </strong>
          niyialexp@gmail.com
        </p>
      </div>
    );
  }
}

export default EditProfileSideBar;
