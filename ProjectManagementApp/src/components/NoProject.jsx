import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { projectCreationActions } from "../store";

export default function NoProject() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewProject = () => {
    dispatch(projectCreationActions.addNewProject());
    navigate("/addProject");
  };

  return (
    <>
      <div className="text-center">
      
        <img
          src="https://notatag-public.s3.ap-southeast-1.amazonaws.com/frontend/asset_web/img/no-data.gif" 
          className="w-56 h-1/2 mt-12 object-contain mx-auto drop-shadow-md"
        />
        <h3 className="text-gray-500 font-bold text-xl">
          No Projects available, create a new project
        </h3>
        <button onClick = {addNewProject} className="text-gray-400 hover:text-white mt-5 px-5 py-3 rounded-md bg-gray-800 hover:bg-black dark:hover:bg-gray-700">
          Create a new project
        </button>
      </div>
    </>
  );
}
