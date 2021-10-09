import { takeLatest } from 'redux-saga/effects';
import { loginSaga, registerSaga } from './authenticationSaga';

import * as types from '../Actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.SIGN_UP_USER, registerSaga);
}