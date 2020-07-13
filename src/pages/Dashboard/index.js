/* eslint-disable operator-linebreak */
/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import AuthService from '../../utils/AuthService';
import DynamiDashboard from '../../components/DynamicDashboard/Dashboard';
import profileImg from '../../assets/icons/icons8-user-30.png';
import { requesterDashboard, adminDashboard } from '../../assets/sidebar';

class Dashboard extends Component {
  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard :
      adminDashboard;
    return (
            <div>
              <DynamiDashboard
              properties={board}
              profile={profileImg}
              />
            </div>
    );
  }
}

export default Dashboard;
