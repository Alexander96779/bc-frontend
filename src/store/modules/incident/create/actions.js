/* eslint-disable object-curly-newline */
import {
  CREATE_INCIDENT_START,
  CREATE_INCIDENT_SUCCESS,
  CREATE_INCIDENT_ERROR
} from './actionTypes';
import onError from '../../../../utils/helpers/errorHandle';
import onSuccess from '../../../../utils/helpers/succesMsg';
import HttpService from '../../../../utils/HttpService';

export const apiStart = () => ({ type: CREATE_INCIDENT_START, });

export const apiSuccess = (payload) => ({
  type: CREATE_INCIDENT_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: CREATE_INCIDENT_ERROR,
  error,
});

export const createIncident = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    const response = await HttpService.post('/incident/create', data, config);
    onSuccess.handle(response.message);
    dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    dispatch(apiError(error.response.data));
  }
};
