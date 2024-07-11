import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  loading: {
    [key: string]: boolean;
  };
  error: {
    [key: string]: string;
  };
  alert: {
    message: string | null;
    messageType: string | null;
  };
  modal: any;
  mobileMenuOpened: boolean;
};

const INITIAL_STATE: AppReducerState = {
  loading: {},
  error: {},
  alert: {
    message: null,
    messageType: null,
  },
  modal: null,
  mobileMenuOpened: false,
};

const appReducers = (state = INITIAL_STATE, action: AppActionTypes): AppReducerState => {
  switch (action.type) {
    case types.SET_LOADING:
      if (state.loading[action.key] && !action.status) {
        const newState = { ...state };
        delete newState.loading[action.key];
        return newState;
      }
      if (!state.loading[action.key] && action.status) {
        return {
          ...state,
          loading: { ...state.loading, [action.key]: action.status },
        };
      }
      return state;
    case types.OPEN_MODAL:
      const newModal = action.payload;
      newModal.opened = true;

      return {
        ...state,
        modal: newModal,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modal: null,
      };
    case types.SET_ERROR:
      if (state.error[action.key] && !action.message) {
        const newState = { ...state };
        delete newState.error[action.key];
        return newState;
      }
      if (action.message) {
        return {
          ...state,
          error: { ...state.error, [action.key]: action.message },
        };
      }
      return state;
    case types.SET_ALERT:
      return {
        ...state,
        alert: {
          message: action.message,
          messageType: action.messageType,
        },
      };
    default:
      return state;
  }
};

export default appReducers;
