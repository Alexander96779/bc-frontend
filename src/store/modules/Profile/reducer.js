const initialState = {
  isLoading: false,
  user: {},
  error: null,
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_PROFILE_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        isLoading: false,
        error: null,
      };
    }
    case 'GET_PROFILE_ERROR': {
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    }
    case 'EDIT_PROFILE_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_PROFILE_SUCCESS': {
      return {
        ...state,
        user: { ...action.payload },
        isLoading: false,
        error: null
      };
    }
    case 'EDIT_PROFILE_ERROR': {
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
export default userProfile;
