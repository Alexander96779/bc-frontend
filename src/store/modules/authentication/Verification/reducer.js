const initialState = {
  isLoading: false,
  user: {},
  isAuthenticated: false,
  error: null,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'VERIFY_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'VERIFY_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        isAuthenticated: true,
        error: null,
        isLoading: false,
      };
    }
    case 'VERIFY_ERROR': {
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentUser;
