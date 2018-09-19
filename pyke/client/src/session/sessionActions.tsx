import api from "../api";

export const SET_CURRENT_USER_PENDING = "SET_CURRENT_USER_PENDING";
export const SET_CURRENT_USER_SUCCESS = "SET_CURRENT_USER_SUCCESS";
export const SET_CURRENT_USER_FAILED = "SET_CURRENT_USER_FAILED";

export const requestCurrentUser = () => async dispatch => {
  dispatch({ type: SET_CURRENT_USER_PENDING });
  try {
    const user = await api.user.currentUser();
    dispatch({ type: SET_CURRENT_USER_SUCCESS, payload: user });
  } catch (err) {
    dispatch({ type: SET_CURRENT_USER_FAILED, payload: err });
  }
};
