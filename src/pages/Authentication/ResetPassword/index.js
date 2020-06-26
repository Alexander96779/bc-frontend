/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../../../containers/AuthLayout';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import '../../../containers/authLayout.scss';
import history from '../../../utils/helpers/history';
import updatePassword from '../../../store/modules/authentication/ResetPassword/actions';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkPasswordInput = this.checkPasswordInput.bind(this);
    this.checkcPasswordInput = this.checkcPasswordInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      password: '',
      confirmPassword: '',
      isLoading: false,
      error: null,
      cpasswordError: '',
      passwordError: '',
      isPasswordValid: false,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  checkPasswordInput(e) {
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        passwordError: 'Should be alphanumeric and atleast 8 to 64 characters',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordValid: true,
      });
    }
  }

  checkcPasswordInput(e) {
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        cpasswordError: 'Should be alphanumeric and atleast 8 to 64 characters',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        cpasswordError: '',
        isPasswordValid: true,
      });
    }
  }

  resetInput(e) {
    if (e.target.id === 'password') {
      this.setState({ passwordError: '', isPasswordValid: false });
    }
    if (e.target.id === 'cpassword') {
      this.setState({ cpasswordError: '', isPasswordValid: false });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const { resetPassword } = this.props;
    await resetPassword({
      password,
      confirmPassword,
    });
  }

  render() {
    const { password, confirmPassword, passwordError, cpasswordError } = this.state;
    return (
            <AuthLayout title="Reset password" redirectMsg="Already have an account" redirectLocation=" Login" redirect={() => history.push('/login')}>
                <div className="form-box">
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="error">{passwordError}</div>
                        <InputField
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        required
                        className="input"
                        value={password}
                        onChange={this.handleChange}
                        onKeyUp={this.checkPasswordInput}
                        onFocus={this.resetInput}
                        />
                        <div className="error">{cpasswordError}</div>
                        <InputField
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        id="cpassword"
                        required
                        className="input"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        onKeyUp={this.checkcPasswordInput}
                        onFocus={this.resetInput}
                        />
                        <Button className="btn" type="submit" value="Reset password"/>
                    </form>
                    </div>
                </div>
            </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.passwordReset,
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (data) => dispatch(updatePassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
