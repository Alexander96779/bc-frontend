/* eslint-disable consistent-return */
import swal from 'sweetalert';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './actionTypes';
import history from '../../../../utils/helpers/history';
import API from '../../../../utils/helpers/API';

export const loginStart = () => ({ type: LOGIN_START, });

export const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginUser = (data) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await API.post('/auth/login', data);
    const { token } = response.data.data;
    localStorage.setItem('broadcaster_token', token);
    await dispatch(successLogin(response.data));
    history.push('/dashboard');
  } catch (error) {
    swal({
      title: 'Login error',
      text: `${error.response.data.message}`,
      icon: 'error',
      timer: 5000,
      buttons: false,
    });
    return dispatch(LoginError(error.response.data));
  }
};
export default { loginUser };
