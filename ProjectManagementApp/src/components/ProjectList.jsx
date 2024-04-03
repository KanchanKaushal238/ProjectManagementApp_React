import { useDispatch, useSelector } from "react-redux";
import NoProject from "./NoProject";
import { projectCreationActions } from "../store";
import { useNavigate } from "react-router";


export default function ProjectList() {
  const projectList = useSelector(
    (state) => state.projectHandle.projectArrayItems
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function openProjectDetails(projectId){
    const projectDetails = projectList.filter(x=>x.id === projectId);
    dispatch(projectCreationActions.openProjectDetails(projectDetails));

    navigate('projectDetails');

  }

  
  
  return (
    <>
      {projectList.length === 0 && <NoProject />}

      {projectList.length > 0 &&
        projectList.map((project, i) => (
          <div className="ml-10 mt-10" key = {`div1-${i}`}>
            <div className="animate-slideIn opacity-0 text-xl my-2"
              style={{ "--delay": i * 0.25 + "s" }} key = {`div2-${i}`}>
            <div className="bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-30% to-indigo-500 to-90% w-11/12 pl-1 shadow">
            <div className="bg-white pl-2 py-4" key = {`div3-${i}`}>
                <div className="text-end pr-2 text-gray-500 dark:text-gray-400" key = {`duedate-${i}`}>
                    {project.dueDate}
                </div>
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                key = {`svg1-${i}`}
              >
                <path key = {`path1-${i}`} d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
                <h5 key = {`title-${i}`} className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-black">
                  {project.title}
                </h5>
              <p key = {`description-${i}`} className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <button key = {`button-${i}`} onClick={() => openProjectDetails(project.id)}
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                Open Project Details
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  key = {`svg2-${i}`}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                    key = {`path2-${i}`}
                  />
                </svg>
              </button>
            </div>
          </div>
          </div>
          </div>
          
        ))}
    </>
  );
}
