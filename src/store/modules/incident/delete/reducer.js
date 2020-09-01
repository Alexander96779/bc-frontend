const initialState = {
  loading: false,
  message: '',
  error: null
};

const removeIncident = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_INCIDENT_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'DELETE_INCIDENT_SUCCESS': {
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'DELETE_INCIDENT_ERROR': {
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

export default removeIncident;
