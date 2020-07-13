/* eslint-disable operator-linebreak */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Button from '../../../components/Button';
import './userRoles.scss';
import { viewUsers } from '../../../store/modules/authentication/UserRoles/actions';
import AuthService from '../../../utils/AuthService';
import DynamiDashboard from '../../../components/DynamicDashboard/Dashboard';
import profileImg from '../../../assets/icons/icons8-user-30.png';
import { requesterDashboard, adminDashboard } from '../../../assets/sidebar';
import Spinner from '../../../components/Spinner';

class UserRoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    await this.props.dispalyUsers();
  }

  render() {
    const token = AuthService.getToken();
    const { role } = !!token ? jwtDecode(token) : { role: '' };
    const board = role === 'requester' ? requesterDashboard :
      adminDashboard;
    const { users } = this.props;
    const renderTable = () => (
      users.users.length > 0
        ? users.users.map((user) => {
          return (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.user_name}</td>
            <td>{user.role}</td>
            <td>
              <Button
              className="role-btn"
              value="Change role"
              />
            </td>
          </tr>
          );
        }) : <div className="no-users-head"><h2>No users found!!!</h2></div>
    );
    return users.isLoading ? (
      <Spinner />
    ) : (
            <div className="table_wrapper">
            <div className="table_wrapper_body">
            <div className="table_wrapper_body_head">
            <h2>All Broadcaster users</h2>
            </div>
            <div className="table_wrapper_body_table">
            <table>
                <thead>
                <tr>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  {renderTable()}
                </tbody>
            </table>
            </div>
            </div>
            <DynamiDashboard
              properties={board}
              profile={profileImg}
              />
            </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.getAllUsers,
});

const mapDispatchToProps = (dispatch) => ({
  dispalyUsers: () => dispatch(viewUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRoles);
