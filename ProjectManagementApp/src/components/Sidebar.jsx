import ProjectButton from "./ProjectButton";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsAPI, projectCreationActions } from "../store";
import ProjectList from "./ProjectList";
import { useNavigate } from "react-router";

// import { Link } from "react-router-dom";


export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openProjectList = useSelector(state => state.projectHandle.openProjectList);

  function addNewProject()
  {
    dispatch(projectCreationActions.addNewProject());
    navigate('addProject');
  }

  function handleProjectList(){
    dispatch(getProjectsAPI());

    navigate('ProjectList');
  }
  
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen bg-black transition-transform-translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-hidden bg-black">
          <ul className="space-y-2 font-medium">
            <li>
              <h1 className="flex text-gray-200 items-center mx-2 my-8 p-2 rounded-lg ">
                YOUR PROJECTS
              </h1>
            </li>

            <button
              onClick={ addNewProject }
              className="flex text-gray-400 hover:text-black items-center mx-5 my-4 p-2 rounded-md bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              + Add Project
            </button>

            <li>

              <button onClick={handleProjectList} 
              className="flex text-gray-200 items-center m-2 p-2 rounded-lg">
                My Projects
              </button>
              {/* {
                openProjectList && <ProjectList />
              } */}
              {/* {
              projectList.length > 0 && (
                <ProjectButton /> )} */}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
