const initialState = {
  isLoading: false,
  incidents: [],
  error: null
};

const getAll = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_ALL_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'VIEW_ALL_SUCCESS': {
      return {
        ...state,
        incidents: action.payload,
        error: null,
        isLoading: false,
      };
    }
    case 'VIEW_ALL_ERROR': {
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

export default getAll;
