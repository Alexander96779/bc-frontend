/* eslint-disable no-useless-escape */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../../../containers/AuthLayout';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import '../../../containers/authLayout.scss';
import history from '../../../utils/helpers/history';
import { loginUser } from '../../../store/modules/authentication/Login/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkEmailInput = this.checkEmailInput.bind(this);
    this.checkPasswordInput = this.checkPasswordInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: null,
      isAuthenticated: false,
      emailError: '',
      passwordError: '',
      isEmailValid: false,
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

  checkEmailInput(e) {
    const validEmailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!validEmailRegex.test(e.target.value)) {
      this.setState({
        emailError: 'Email is invalid',
        isEmailValid: false,
      });
    } else {
      this.setState({
        emailError: '',
        isEmailValid: true,
      });
    }
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

  resetInput(e) {
    if (e.target.id === 'email') {
      this.setState({ emailError: '', isEmailValid: false });
    }
    if (e.target.id === 'password') {
      this.setState({ passwordError: '', isPasswordValid: false });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { userLogin } = this.props;
    await userLogin({
      email,
      password
    });
  }

  render() {
    const { email, password, emailError, passwordError } = this.state;
    return (
            <AuthLayout title="Login to your account" redirectMsg="Do not have an account" redirectLocation=" Signup" redirect={() => history.push('/signup')}>
                <div className="form-box">
                    <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="error">{emailError}</div>
                        <InputField
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                        className="input"
                        value={email}
                        onChange={this.handleChange}
                        onKeyUp={this.checkEmailInput}
                        onFocus={this.resetInput}
                        />
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
                        <Button className="btn" type="submit" value="Login"/>
                    </form>
                    <div className="links">
                        <a href="/forgotPassword">Forgot Password?</a>
                    </div>
                    </div>
                </div>
            </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.logUserIn,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (data) => dispatch(loginUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
