const SET_LOADING = 'loading/SET_LOADING';
const OPEN_MODAL = 'app/OPEN_MODAL';
const CLOSE_MODAL = 'app/CLOSE_MODAL';
const SET_ERROR = 'loading/SET_ERROR';
const SET_ALERT = 'loading/SET_ALERT';

// interfaces
export interface SetLoading {
  type: typeof SET_LOADING;
  key: string;
  status: boolean;
}
export interface SetError {
  type: typeof SET_ERROR;
  key: string;
  message: null | string;
}

export interface SetAlert {
  type: typeof SET_ALERT;
  message: string | null;
  messageType: string | null;
}

type OpenModalType = {
  type: typeof OPEN_MODAL;
  payload?: any;
};

type CloseModalType = {
  type: typeof CLOSE_MODAL;
  payload?: null;
};

export type LoadingActionTypes =
  | SetLoading
  | SetError
  | SetAlert
  | OpenModalType
  | CloseModalType;

export default {
  SET_LOADING,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_ERROR,
  SET_ALERT,
} as const;
