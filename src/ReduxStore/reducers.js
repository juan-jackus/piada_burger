import { auth } from '../firebase';

const initialState = {
  user: null,
  authError: {},
  showLoginForm: false,
  authSpinner: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_SPINNER':
      return {
        ...state,
        authSpinner: action.value,
      };
    case 'SHOW_MODAL_HANDLER':
      document.body.style.overflow = 'auto';
      return {
        ...state,
        showLoginForm: action.value,
      };
    case 'AUTH_STATE_CHANGED':
      return {
        ...state,
        user: action.value,
      };

    case 'LOG_OUT_HANDLER':
      auth.signOut();
      return {
        ...state,
      };

    case 'SET_AUTH_ERROR':
      return {
        ...state,
        authError: action.value,
      };

    default:
      return state;
  }
};

export default reducers;
