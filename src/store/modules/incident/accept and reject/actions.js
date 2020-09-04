import {
  ACCEPT_INCIDENT_START,
  ACCEPT_INCIDENT_SUCCESS,
  ACCEPT_INCIDENT_ERROR,
  REJECT_INCIDENT_START,
  REJECT_INCIDENT_SUCCESS,
  REJECT_INCIDENT_ERROR
} from './actionTypes';
import HttpService from '../../../../utils/HttpService';
import onError from '../../../../utils/helpers/errorHandle';
import onSuccess from '../../../../utils/helpers/succesMsg';
import history from '../../../../utils/helpers/history';

export const acceptStart = () => ({ type: ACCEPT_INCIDENT_START, });

export const acceptSuccess = (payload) => ({
  type: ACCEPT_INCIDENT_SUCCESS,
  payload,
});

export const acceptError = (error) => ({
  type: ACCEPT_INCIDENT_ERROR,
  error,
});

export const rejectStart = () => ({ type: REJECT_INCIDENT_START, });

export const rejectSuccess = (payload) => ({
  type: REJECT_INCIDENT_SUCCESS,
  payload,
});

export const rejectError = (error) => ({
  type: REJECT_INCIDENT_ERROR,
  error,
});

export const acceptIncident = () => async (dispatch) => {
  dispatch(acceptStart);
  try {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const response = await HttpService.patch(`/incident/${id}/approve`);
    onSuccess.handle(response.message);
    dispatch(acceptSuccess(response));
    history.push('/incidents');
  } catch (error) {
    onError.handle(error);
    dispatch(acceptError(error.response));
  }
};

export const rejectIncident = () => async (dispatch) => {
  dispatch(rejectStart);
  try {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const response = await HttpService.patch(`/incident/${id}/reject`);
    onSuccess.handle(response.message);
    dispatch(rejectSuccess(response));
    history.push('/incidents');
  } catch (error) {
    onError.handle(error);
    dispatch(rejectError(error.response));
  }
};
