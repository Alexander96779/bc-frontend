import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './actionTypes';
import onSuccess from '../../../../utils/helpers/succesMsg';
import onError from '../../../../utils/helpers/errorHandle';
import API from '../../../../utils/helpers/API';

export const apiStart = () => ({ type: SIGNUP_START, });

export const apiSucess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: SIGNUP_ERROR,
  error,
});

export const addUser = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const response = await API.post('/auth/signup', data);
    onSuccess.handle(response.data.message);
    return dispatch(apiSucess(response.data.data));
  } catch (error) {
    onError.handle(error);
    return dispatch(apiError(error));
  }
};
