const initialState = {
  loading: false,
  incident: null,
  error: null,
};

const editIncident = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'UPDATE_SUCCESS': {
      return {
        ...state,
        incident: action.payload,
        error: null,
        loading: false,
      };
    }
    case 'UPDATE_ERROR': {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default editIncident;
