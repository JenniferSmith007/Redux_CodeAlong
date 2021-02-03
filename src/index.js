import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

// redux thunk : async middleware for Redux
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//store takes into two arguments
//store can only have one reducer

//reducer returns copy of state
//and a enhancer: used to specifiy it to enhance the store
//third party capabilities such as middleware

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
