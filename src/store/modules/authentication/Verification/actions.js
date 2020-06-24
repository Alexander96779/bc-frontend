import {
  VERIFY_START,
  VERIFY_SUCCESS,
  VERIFY_ERROR
} from './actionTypes';
import onSuccess from '../../../../utils/helpers/succesMsg';
// eslint-disable-next-line no-unused-vars
import onError from '../../../../utils/helpers/errorHandle';
import API from '../../../../utils/helpers/API';

export const apiStart = () => ({ type: VERIFY_START, });

export const apiSuccess = (payload) => ({
  type: VERIFY_SUCCESS,
  payload,
});

export const apiError = (error) => ({
  type: VERIFY_ERROR,
  error,
});

export const confirmUser = (data) => async (dispatch) => {
  dispatch(apiStart());
  try {
    const response = await API.post(`/auth/verification/${data}`);
    onSuccess.handle(response.message);
    return dispatch(apiSuccess(response.data.data.user));
  } catch (error) {
    // onError.handle(error);
    return dispatch(apiError(error.response.data));
  }
};
