import AddProject from "./components/AddProject";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { projectCreationActions } from "./store";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const isNewProj = useSelector((state) => state.projectHandle.isNewProj);
 const isSuccess = useSelector((state) => state.projectHandle.isSuccess);

  const dispatch = useDispatch();

  useEffect(() => {
  if(isSuccess)
  {
    dispatch(projectCreationActions.notify());
  }
}, [isSuccess]);

  return (
    <>
      <Sidebar></Sidebar>
      <ToastContainer autoClose={1000} hideProgressBar={true} pauseOnHover={false}></ToastContainer>
      <div className="ml-64">
        {isNewProj && <AddProject />}
        {!isNewProj && <Home />}
      </div>
    </>
  );
}

export default App;
