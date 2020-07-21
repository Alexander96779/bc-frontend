const initialState = {
  isLoading: false,
  incident: { },
  error: null,
};

const incidentCreate = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_INCIDENT_START': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CREATE_INCIDENT_SUCCESS': {
      return {
        ...state,
        incident: { ...action.payload },
        isLoading: false,
        error: null,
      };
    }
    case 'CREATE_INCIDENT_ERROR': {
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

export default incidentCreate;
