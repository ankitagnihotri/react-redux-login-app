import { combineReducers } from "redux";
import Login from "./Login";

const appReducer = combineReducers({
  Login: Login
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
