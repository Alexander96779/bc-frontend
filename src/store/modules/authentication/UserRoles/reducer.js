const initialState = {
  isLoading: false,
  users: [],
  error: null,
  user: [],
};

const getAllUsers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_USERS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };
    }
    case 'GET_USERS_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case 'CHANGE_ROLE_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHANGE_ROLE_SUCCESS': {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case 'CHANGE_ROLE_ERROR': {
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
export default getAllUsers;
