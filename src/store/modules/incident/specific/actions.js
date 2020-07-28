/* eslint-disable object-curly-newline */
import {
  VIEW_SPECIFIC_START,
  VIEW_SPECIFIC_SUCCESS,
  VIEW_SPECIFIC_ERROR
} from './actionTypes';
import HttpService from '../../../../utils/HttpService';
import onError from '../../../../utils/helpers/errorHandle';

export const apiStart = () => ({
  type: VIEW_SPECIFIC_START,
});

export const apiSuccess = (payload) => ({
  type: VIEW_SPECIFIC_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: VIEW_SPECIFIC_ERROR,
  error,
});

export const findOne = () => async (dispatch) => {
  dispatch(apiStart());
  try {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    const response = await HttpService.get(`/incident/${id}`);
    dispatch(apiSuccess(response.data));
  } catch (error) {
    onError.handle(error);
    dispatch(apiError(error.response.data));
  }
};
