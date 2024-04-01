import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./components/AddProject.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import OpenProject from "./components/OpenProject.jsx";
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
// import { Router, Route , browserHistory} from 'react-router'

// const router = createBrowserRouter([
//   {
//     path: '/Home',
//     element: <App/>
//   },
//   {
//     path: 'Home/AddProject',
//     element: <AddProject/>

//   }
// ])

// const history = syncHistoryWithStore(browserHistory , store);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Router history = {history}>
    <Route exact path="/" component={App} >
      <IndexRoute component={Home}/>
      <Route path="myProjects" component={OpenProject} />
    </Route>
    </Router> */}
      <App />
  </Provider>
);
