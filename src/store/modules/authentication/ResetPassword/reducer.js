const initialState = {
  isLoading: false,
  password: '',
  confirmPassword: '',
  error: null,
};

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'RESET_SUCCESS': {
      return {
        ...state,
        password: action.payload,
        confirmPassword: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case 'RESET_ERROR': {
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
export default passwordReset;
