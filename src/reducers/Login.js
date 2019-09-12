import {
  VERIFY_CLIENT,
  VERIFY_CLIENT_ERROR,
  VERIFY_CLIENT_SESSION
} from "./../actions/actionTypes";

const initialState = {
  email: "",
  password: "",
  error: "",
  loggedIn: false
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case VERIFY_CLIENT: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      };
    }
    case VERIFY_CLIENT_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case VERIFY_CLIENT_SESSION: {
      return {
        ...state,
        loggedIn: action.payload
      };
    }
    default:
      return state;
  }
};

export default Login;
