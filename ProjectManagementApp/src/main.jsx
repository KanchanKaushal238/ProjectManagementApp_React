import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Sidebar from "./components/sidebar.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProject from "./components/AddProject.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
