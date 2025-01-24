import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import AppStore from "./redux/AppStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AppContainer /> */}
    <Provider store={AppStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
