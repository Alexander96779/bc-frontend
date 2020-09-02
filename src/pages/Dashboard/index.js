/* eslint-disable operator-linebreak */
/* eslint-disable no-extra-boolean-cast */
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import AuthService from '../../utils/AuthService';
import DynamiDashboard from '../../components/DynamicDashboard/Dashboard';
import Spinner from '../../components/Spinner';
import profileImg from '../../assets/icons/icons8-user-30.png';
import { requesterDashboard, adminDashboard } from '../../assets/sidebar';
import { viewUsers } from '../../store/modules/authentication/UserRoles/actions';
import { viewAll } from '../../store/modules/incident/view/actions';
import './dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      incidents: [],
    };
  }

  async componentDidMount() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    if (role === 'administrator') {
      await this.props.displayUsers();
      await this.props.displayRecords();
    } else {
      await this.props.displayRecords();
    }
  }

  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard :
      adminDashboard;

    const { users, incidents } = this.props;
    const renderUserTable = () => (
      users.users.length > 0
        ? users.users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.user_name}</td>
              <td>{user.role}</td>
            </tr>
        )) : <div><h2>No Users Found!!!</h2></div>
    );

    const renderIncidentTable = () => (
      incidents.incidents.length > 0
        ? incidents.incidents.map((incident) => (
        <tr key={incident.id}>
          <td>{incident.title}</td>
          <td>{incident.category}</td>
          <td>{incident.status}</td>
          <td>{incident.user_FirstName} {incident.user_LastName}</td>
        </tr>
        )) : <div><h2>No Incidents Found!!</h2></div>
    );
    return users.isLoading || incidents.isLoading ? (
      <Spinner />
    ) : (
      role === 'administrator' ? (
            <div className="dashboard_wrapper">
              <div className="user_table_body">
                <div className="user_table_body_head">
                  <h2>All Broadcaster users</h2>
                </div>
                <div className="user_table_body_table">
            <table>
                <thead>
                <tr>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Role</th>
                </tr>
                </thead>
                <tbody>
               {renderUserTable()}
                </tbody>
            </table>
            </div>
            </div>

            <div className="incident_table_body">
                <div className="incident_table_body_head">
                  <h2>All Broadcaster incidents</h2>
                </div>
                <div className="incident_table_body_table">
            <table>
                <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Creator</th>
                </tr>
                </thead>
                <tbody>
              {renderIncidentTable()}
                </tbody>
            </table>
            </div>
            </div>
              <DynamiDashboard
              properties={board}
              profile={profileImg}
              />
            </div>
      ) : (
    <div className="dashboard_wrapper">
    <div className="incident_table_body">
        <div className="incident_table_body_head">
          <h2>All Broadcaster incidents</h2>
        </div>
        <div className="incident_table_body_table">
    <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Creator</th>
        </tr>
        </thead>
        <tbody>
      {renderIncidentTable()}
        </tbody>
    </table>
    </div>
    </div>
      <DynamiDashboard
      properties={board}
      profile={profileImg}
      />
    </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.getAllUsers,
  incidents: state.getAll,
});

const mapDispatchToProps = (dispatch) => ({
  displayUsers: () => dispatch(viewUsers()),
  displayRecords: () => dispatch(viewAll()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
