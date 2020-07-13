/* eslint-disable object-curly-newline */
import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_ERROR
} from './actionTypes';
import onError from '../../../utils/helpers/errorHandle';
import onSuccess from '../../../utils/helpers/succesMsg';
import HttpService from '../../../utils/HttpService';

export const getStart = () => ({ type: GET_PROFILE_START, });

export const getSuccess = (payload) => ({
  type: GET_PROFILE_SUCCESS,
  payload,
});

export const getError = (error) => ({
  type: GET_PROFILE_ERROR,
  error,
});

export const editStart = () => ({ type: EDIT_PROFILE_START, });

export const editSuccess = (payload) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload,
});

export const editError = (error) => ({
  type: EDIT_PROFILE_ERROR,
  error,
});

export const getProfile = () => async (dispatch) => {
  dispatch(getStart());
  try {
    const response = await HttpService.get('/profile');
    return dispatch(getSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(getError(error.response.data));
  }
};

export const updateProfile = (data) => async (dispatch) => {
  dispatch(editStart());
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const response = await HttpService.patch('/profile', data, config);
    console.log(response.data);
    onSuccess.handle(response.data);
    return dispatch(editSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(editError(error.response.data));
  }
};
