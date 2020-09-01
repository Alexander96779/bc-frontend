/* eslint-disable object-curly-newline */
import {
  DELETE_INCIDENT_START,
  DELETE_INCIDENT_SUCCESS,
  DELETE_INCIDENT_ERROR
} from './actionTypes';
import HttpService from '../../../../utils/HttpService';
import onSuccess from '../../../../utils/helpers/succesMsg';
import onError from '../../../../utils/helpers/errorHandle';
import history from '../../../../utils/helpers/history';

export const apiStart = () => ({
  type: DELETE_INCIDENT_START,
});

export const apiSuccess = (payload) => ({
  type: DELETE_INCIDENT_SUCCESS,
  payload
});

export const apiError = (error) => ({
  type: DELETE_INCIDENT_ERROR,
  error
});

export const deleteIncident = () => async (dispatch) => {
  dispatch(apiStart());
  try {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const response = await HttpService.delete(`/incident/${id}/delete`);
    onSuccess.handle(response.message);
    dispatch(apiSuccess(response));
    history.push('/incidents');
  } catch (error) {
    onError.handle(error);
    dispatch(apiError(error.response));
  }
};
