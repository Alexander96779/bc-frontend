/* eslint-disable object-curly-newline */
import {
  VIEW_ALL_START,
  VIEW_ALL_SUCCESS,
  VIEW_ALL_ERROR
} from './actionTypes';
import HttpService from '../../../../utils/HttpService';
import onError from '../../../../utils/helpers/errorHandle';

export const apiStart = () => ({
  type: VIEW_ALL_START,
});

export const apiSuccess = (payload) => ({
  type: VIEW_ALL_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: VIEW_ALL_ERROR,
  error,
});

export const viewAll = () => async (dispatch) => {
  dispatch(apiStart());
  try {
    const response = await HttpService.get('/incident/viewAll');
    dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    dispatch(apiError(error.response.data));
  }
};
