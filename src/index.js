import React from "react";
import CustomRouter from "./routes";
import ReactDOM from "react-dom";
import configureStore from "./store/configStore";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = configureStore(applyMiddleware(thunk));

// console.log = function() {};
ReactDOM.render(
  <Provider store={store}>
    <div>
      <CustomRouter />
    </div>
  </Provider>,
  document.getElementById("root")
);
