import {
  SET_CURRENT_USER_PENDING,
  SET_CURRENT_USER_FAILED,
  SET_CURRENT_USER_SUCCESS
} from "./sessionActions";

type State = {
  readonly isPending: boolean;
  readonly user: object;
  readonly error: string;
};

const initialState: State = {
  isPending: false,
  user: {},
  error: ""
};

export const sessionReducer = (state = initialState, action) => {
  switch (action) {
    case SET_CURRENT_USER_PENDING:
      return { ...state, isPending: true };
    case SET_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload, isPending: false };
    case SET_CURRENT_USER_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
