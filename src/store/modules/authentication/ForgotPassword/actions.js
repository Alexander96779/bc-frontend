/* eslint-disable no-unused-vars */
import {
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCCESS,
  FORGOT_PASSWORD_ERROR
} from './actionTypes';
import onSuccess from '../../../../utils/helpers/succesMsg';
import onError from '../../../../utils/helpers/errorHandle';
import API from '../../../../utils/helpers/API';

export const apiStart = () => ({ type: FORGOT_PASSWORD_START, });

export const apiSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCCESS,
  payload,
});

export const apiError = (error) => ({
  type: FORGOT_PASSWORD_ERROR,
  error,
});

const sendEmail = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const response = await API.post('/auth/forgotPassword', data);
    onSuccess.handle(response.data.message);
    return dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(apiError(error.response.data));
  }
};

export default sendEmail;
