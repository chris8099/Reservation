import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import RootRouter from "./router";
const Store = createStore(RootRouter);

ReactDOM.render(
  <Provider store={Store}>
    <RootRouter />
  </Provider>,
  document.getElementById("root")
);