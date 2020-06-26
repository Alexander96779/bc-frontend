const initialState = {
  email: '',
  isLoading: false,
  error: null,
};

const passwordForgot = (state = initialState, action) => {
  switch (action.type) {
    case 'FORGOT_PASSWORD_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'FORGOT_PASSWORD_SUCCESS': {
      return {
        ...state,
        email: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case 'FORGOT_PASSWORD_ERROR': {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default passwordForgot;
