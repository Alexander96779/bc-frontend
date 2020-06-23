const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

const signUpUser = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SIGNUP_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        error: null,
        isLoading: false,
      };
    }
    case 'SIGNUP_ERROR': {
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

export default signUpUser;
