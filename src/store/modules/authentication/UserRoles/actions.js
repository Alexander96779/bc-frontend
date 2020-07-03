/* eslint-disable object-curly-newline */
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CHANGE_ROLE_START,
  CHANGE_ROLE_SUCCESS,
  CHANGE_ROLE_ERROR
} from './actiontypes';
import onError from '../../../../utils/helpers/errorHandle';
import onSuccess from '../../../../utils/helpers/succesMsg';
import HttpService from '../../../../utils/HttpService';

export const apiStart = () => ({ type: GET_USERS_START, });

export const apiSucess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: GET_USERS_ERROR,
  error,
});

export const changeRoleStart = () => ({
  type: CHANGE_ROLE_START,
});

export const changeRoleSuccess = (payload) => ({
  type: CHANGE_ROLE_SUCCESS,
  payload,
});

export const changeRoleError = (error) => ({
  type: CHANGE_ROLE_ERROR,
  error,
});

export const viewUsers = () => async (dispatch) => {
  dispatch(apiStart());
  try {
    const response = await HttpService.get('/auth/allUsers');
    return dispatch(apiSucess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(apiError(error.response.data));
  }
};

export const updateRole = (data) => async (dispatch) => {
  dispatch(changeRoleStart());
  try {
    const response = await HttpService.put('/auth/changeRole', data);
    console.log(response.data);
    onSuccess.handle(response.data);
    return dispatch(changeRoleSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(changeRoleError(error.response.data));
  }
};
