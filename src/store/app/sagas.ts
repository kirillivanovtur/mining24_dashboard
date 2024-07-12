import { put, takeLatest } from 'redux-saga/effects';

import types from '../actionTypes';

function* loading() {
  yield put({
    type: types.SET_LOADING,
  });
}

export default function* appSagas() {
  yield takeLatest(types.SET_LOADING, loading);
}
