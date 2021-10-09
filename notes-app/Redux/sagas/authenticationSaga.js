import { put, call } from 'redux-saga/effects';
import { loginService, registerUserService, forgetPasswordService } from './services/authenticationService';

import * as types from '../Actions'
// import { history } from '../../App';
// import { push } from "react-router-redux"

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.SIGN_UP_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.SIGN_UP_USER_ERROR, response: error.response });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
    // history.push("/sign-up")
    // yield call(push("/"))
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, response: error.response })
  }
}
