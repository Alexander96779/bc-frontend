const initialState = {
  isLoading: false,
  incident: '',
  error: null,
};

const specificIncident = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_SPECIFIC_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'VIEW_SPECIFIC_SUCCESS': {
      return {
        ...state,
        incident: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case 'VIEW_SPECIFIC_ERROR': {
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

export default specificIncident;
