import * as types from './index';

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
};

export const setUserInfo = (user) => {
  return {
    type: types.SET_USER_DATA,
    user
  }
};

export const setLoaderTrue = () => {
  return {
    type: types.SET_LOADER_TRUE,
  }
};

export const setBtnLoaderTrue = () => {
  return {
    type: types.SET_BTN_LOADER_TRUE,
  }
};

export const setLoaderFalse = () => {
  return {
    type: types.SET_LOADER_FALSE,
  }
};

export const userLogOut = () => {
  return {
    type: types.USER_LOG_OUT,
  }
};

export const signUpUser = (user) => {
  return{
    type: types.SIGN_UP_USER,
    user
  }
}
