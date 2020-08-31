/* eslint-disable object-curly-newline */
import {
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_ERROR
} from './actionTypes';
import HttpService from '../../../../utils/HttpService';
import onError from '../../../../utils/helpers/errorHandle';
import onSuccess from '../../../../utils/helpers/succesMsg';

export const apiStart = () => ({ type: UPDATE_START, });

export const apiSuccess = (payload) => ({
  type: UPDATE_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: UPDATE_ERROR,
  error,
});

export const editIncident = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const config = {
      headers: { 'content-type': 'multipart/form-data',
      },
    };
    const response = await HttpService.patch(`incident/${id}/edit`, data, config);
    onSuccess.handle(response.message);
    dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    dispatch(apiError(error.response.data));
  }
};
