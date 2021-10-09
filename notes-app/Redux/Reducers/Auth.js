import * as types from '../Actions';
const initialState = {
  loader: true,
  forgetPasswordToken: "",
  btnLoader: false,
}
export default function AuthReducer(state = initialState, action) {
  const response = action.response;
  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, userInfo: response.data.data, btnLoader: false };
    case types.LOGIN_USER_ERROR:
      return { ...state, userInfo: response.data, btnLoader: false };
    case types.SIGN_UP_USER_SUCCESS:
      return { ...state, userInfo: response.data.data, btnLoader: false };
    case types.SIGN_UP_USER_ERROR:
      return { ...state, userInfo: response.data, btnLoader: false };
    case types.FORGET_PASSWORD_SUCCESS:
      return { ...state, forgetPasswordToken: response.data.data.token, btnLoader: false };
    case types.FORGET_PASSWORD_ERROR:
      return { ...state, btnLoader: false };
    case types.RESET_FORGET_PASSWORD:
      return { ...state, forgetPasswordToken: '' };
    case types.SET_USER_DATA:
      return { ...state, userInfo: action.user };
    case types.USER_LOG_OUT:
      return { ...state, userInfo: {} };
    case types.SET_LOADER_TRUE:
      return { ...state, loader: true };
    case types.SET_LOADER_FALSE:
      return { ...state, loader: false };
    case types.SET_BTN_LOADER_TRUE:
      return { ...state, btnLoader: true };
    default:
      return state;
  }
};