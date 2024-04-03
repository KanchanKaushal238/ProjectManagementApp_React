import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider, connect } from "react-redux";
import {store, history}  from "./store/index.js";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Sidebar from "./components/Sidebar.jsx";

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}>
     <BrowserRouter history = {history}> 
     <Sidebar />
      <App />
    {/* </ConnectedRouter> */}
    </BrowserRouter> 
    {/* <ConnectedRouter history = {history}>
      <>
      <Routes>
        <Route exact path = "/" element={() => (<App />)} />
        <Route path="/AddProject" exact component={() => (<><h1>test</h1></>)} />
        <Route render={() => (<div>Miss</div>)} />
      </Routes>
      </>
    </ConnectedRouter> */}
    {/* <Router> */}
      {/* <App /> */}
      {/* </Router> */}
  </Provider>
  </React.StrictMode>
);
