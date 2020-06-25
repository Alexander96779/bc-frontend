const initialState = {
  isLoading: false,
  user: {},
  error: null,
  isAuthenticated: false,
};

const logUserIn = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        error: null,
        isLoading: false,
        isAuthenticated: true,
      };
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isAuthenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default logUserIn;
