const initialState = {
  loading: false,
  message: '',
  error: null,
};

const acceptRejectIncident = (state = initialState, action) => {
  switch (action.type) {
    case 'ACCEPT_INCIDENT_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'ACCEPT_INCIDENT_SUCCESS': {
      return {
        ...state,
        message: action.payload,
        loading: false,
        error: null,
      };
    }
    case 'ACCEPT_INCIDENT_ERROR': {
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    }
    case 'REJECT_INCIDENT_START': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'REJECT_INCIDENT_SUCCESS': {
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    }
    case 'REJECT_INCIDENT_ERROR': {
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

export default acceptRejectIncident;
