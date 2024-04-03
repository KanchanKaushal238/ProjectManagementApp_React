import AddProject from "./components/AddProject";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { history, projectCreationActions } from "./store";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Link, NavLink, Routes, Route,createBrowserRouter } from "react-router-dom";

import PropTypes from "prop-types";
import ProjectList from "./components/ProjectList";
import OpenProject from "./components/OpenProject";
// import { Routes, Route } from "react-router-dom";

function App() {
  const isNewProj = useSelector((state) => state.projectHandle.isNewProj);
  const isSuccess = useSelector((state) => state.projectHandle.isSuccess);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(projectCreationActions.notify());
    }
  }, [isSuccess]);

  const propTypes = {
    location: PropTypes.object,
  };

  const scenes = {
    SIDEBAR: <Sidebar />,
    HOME: <Home />,
    ADDPROJECT: <AddProject />,
  };

  return (
    <>
    {/* <Sidebar /> */}
    <ToastContainer
        autoClose={1000}
        hideProgressBar={true}
        pauseOnHover={false}
      ></ToastContainer>
      <div className="ml-64">
    <Routes>
      {/* {!isNewProj && } */}
      <Route exact path = "/" element = {<Home/>} /> 

      {/* {
        isNewProj && } */}
        <Route exact path = "addProject" element = {<AddProject/>} /> 
        <Route exact path = "ProjectList" element = {<ProjectList/>} /> 
        <Route exact path = "ProjectList/projectDetails" element = {<OpenProject />} />
      </Routes>
      
      </div>
      {/* 
      <div className="ml-64">
        {isNewProj && (
          <Link to={{ type: "ADDPROJECT" }}>
            <AddProject />
          </Link>
        )}
        {!isNewProj && (
          <Link to={{ type: "HOME" }}>
            <Home />
          </Link>
        )}
      </div> */}
      {/* <Sidebar></Sidebar>
      <ToastContainer autoClose={1000} hideProgressBar={true} pauseOnHover={false}></ToastContainer>
      <div className="ml-64">
        {isNewProj &&
          <AddProject /> 
         }
        {!isNewProj && 
          <NavLink path = '/home' to = '/home' element = {<Home></Home>}></NavLink>
        }
      </div> */}
    </>
  );
}

export default App;
