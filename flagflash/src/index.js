import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
