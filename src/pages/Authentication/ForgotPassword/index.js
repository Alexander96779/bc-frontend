/* eslint-disable object-curly-newline */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthLayout from '../../../containers/AuthLayout';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import history from '../../../utils/helpers/history';
import sendEmail from '../../../store/modules/authentication/ForgotPassword/actions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
    this.state = {
      email: '',
      error: '',
      emailError: '',
      isEmailValid: false,
    };
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ email: value, });
  }

  checkEmailInput = (e) => {
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

  resetInput = (e) => {
    if (e.target.id === 'email') {
      this.setState({ emailError: '', isEmailValid: false });
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { userForgot } = this.props;
    await userForgot({ email });
  }

  render() {
    const { email, emailError } = this.state;
    return (
            <AuthLayout title="Forgot Password" redirectMsg="already have an account" redirectLocation=" Login" redirect={() => history.push('/login')} >
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
                        value={email}
                        className="input"
                        onChange={this.handleChange}
                        onKeyUp={this.checkEmailInput}
                        onFocus={this.resetInput}
                        />
                        <Button className="btn" type="submit" value="Request reset"/>
                        </form>
                    </div>
                </div>
            </AuthLayout>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.passwordForgot, });
const mapDispatchToProps = (dispatch) => ({ 
  userForgot: (data) => dispatch(sendEmail(data)), 
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
