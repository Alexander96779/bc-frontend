/* eslint-disable no-unused-vars */
import {
  RESET_START,
  RESET_SUCCESS,
  RESET_ERROR
} from './actionTypes';
import onSuccess from '../../../../utils/helpers/succesMsg';
import onError from '../../../../utils/helpers/errorHandle';
import API from '../../../../utils/helpers/API';

export const apiStart = () => ({ type: RESET_START, });

export const apiSuccess = (payload) => ({
  type: RESET_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: RESET_ERROR,
  error,
});

const updatePassword = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');
    const email = urlParams.get('email');

    const response = await API.patch(`/auth/resetPassword/${email}/${token}`, data);
    onSuccess.handle(response.data.message);
    return dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(apiError(error.response.data));
  }
};

export default updatePassword;
