import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../../../containers/AuthLayout';
import '../../../containers/authLayout.scss';
import history from '../../../utils/helpers/history';
import { confirmUser } from '../../../store/modules/authentication/Verification/actions';

class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.verifyUser();
  }

  componentDidUpdate() {

  }

  async verifyUser() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    const { verifyUserAccount } = this.props;
    await verifyUserAccount(token);
  }

  render() {
    if (this.props.user.user && this.props.user.user.email) {
      return <AuthLayout title="Verify your email" redirectLocation="Login" redirect={() => history.push('/login')}>
        <div className="form-box">
            <div className="form-box_paragraph">
                <p>Thank you for verifying your account, Please login to continue.</p>
            </div>
        </div>
    </AuthLayout>;
    }
    if (this.props.user.error && this.props.user.error.status) {
      return <AuthLayout title="Verify your email" redirectLocation="Login" redirect={() => history.push('/login')}>
        <div className="form-box">
            <div className="form-box_error">{this.props.user.error.error}</div>
        </div>
    </AuthLayout>;
    }
    return (
            <AuthLayout title="Verify your email" redirectLocation="Login" redirect={() => history.push('/login')}>
                <div className="form-box">
                </div>
            </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.currentUser, });

const mapDispatchToProps = (dispatch) => ({ verifyUserAccount: (data) => dispatch(confirmUser(data)), });

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
