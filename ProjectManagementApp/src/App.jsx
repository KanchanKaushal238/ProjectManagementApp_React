import { useState, useRef, useContext } from "react";
import AddProject from "./components/AddProject";
import Home from "./components/Home";
import Sidebar from "./components/sidebar";
import { useDispatch, useSelector } from "react-redux";



function App() {
  debugger;
  const isNewProj = useSelector(state => state.projectHandle.isNewProj);

  return (
    // <NewProjectContextProvider>
    <>
      <Sidebar></Sidebar>
      <div className="ml-64">
        {isNewProj && <AddProject />}
        {!isNewProj && <Home />}
        </div>
      </>
    // </NewProjectContextProvider>
  );
}

export default App;
