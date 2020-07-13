/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import AuthService from '../../utils/AuthService';
import DynamiDashboard from '../../components/DynamicDashboard/Dashboard';
import profileImg from '../../assets/icons/icons8-user-30.png';
import Header from '../../components/Profile/EditProfileHeader';
import Sidebar from '../../components/Profile/EditProfileSideBar';
import Form from '../../components/Profile/Form';
import { requesterDashboard, adminDashboard } from '../../assets/sidebar';
import './styles/editProfile.scss';

class EditProfile extends Component {
  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard
      : adminDashboard;
    return (
            <div className="edit_profile_wrapper">
                <div className="edit_profile_wrapper_content">
                <Header />
                <Sidebar />
                <Form />
                </div>
                <DynamiDashboard
                properties={board}
                profile={profileImg}
                />
            </div>
    );
  }
}

export default EditProfile;
