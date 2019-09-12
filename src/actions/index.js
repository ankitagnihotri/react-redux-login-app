import {
  VERIFY_CLIENT,
  VERIFY_CLIENT_ERROR,
  VERIFY_CLIENT_SESSION
} from "./actionTypes";

// let user = {
//   username: "hruday@gmail.com",
//   password: "hruday123"
// };

let user = {
  username: "aa",
  password: "aa"
};

export const verifyClient = loginInput => {
  return async dispatch => {
    let value = await user;
    if (
      loginInput.email === value.username &&
      loginInput.password === value.password
    ) {
      dispatch({
        type: VERIFY_CLIENT,
        payload: loginInput
      });
      dispatch({
        type: VERIFY_CLIENT_SESSION,
        payload: true
      });
    } else {
      dispatch({
        type: VERIFY_CLIENT_ERROR,
        payload: "Email or Password is Incorrect"
      });
    }
  };
};
