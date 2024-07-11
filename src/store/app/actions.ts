import types from '../actionTypes';
import {SetAlert, SetError, SetLoading} from "../loadingsErrors/actionTypes.ts";
import appActionTypes from "../actionTypes";

// Type returns type of action
const setLoading = (key: string, status: boolean): SetLoading => ({
  type: appActionTypes.SET_IS_FETCHING,
  key,
  status,
});

const openModal = (payload: any) => ({
  type: types.OPEN_MODAL,
  payload,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

const setError = (key: string, message: string | null): SetError => ({
  type: appActionTypes.SET_ERROR,
  key,
  message,
});

const setAlert = (message: string | null, messageType: string | null): SetAlert => ({
  type: appActionTypes.SET_ALERT,
  message,
  messageType,
});


export {
  setLoading,
  openModal,
  closeModal,
  setError,
  setAlert,
};
