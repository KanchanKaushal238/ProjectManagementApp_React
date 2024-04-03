import { useContext } from 'react';
import noImg from '../assets/no-projects.png';
import { useDispatch } from 'react-redux';
import { projectCreationActions } from '../store';
import { Link, useNavigate } from 'react-router-dom';


export default function Home()
{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewProject = () => {
    dispatch(projectCreationActions.addNewProject());
    navigate('addProject');
  }

  // const {addNewProject} = useContext(NewProjectContext);
    return (
      <div className="text-center">
        <img
          src={noImg}
          className="w-40 object-contain mx-auto mt-12 mb-4 drop-shadow-md"
        />
        <h3 className="text-gray-500 font-bold text-xl">No Project Selected</h3>
        <h3 className="text-gray-500 text-md leading-10">
          Select a project or get started with a new one
        </h3>
        {/* <Link to = '/addProject'> */}
        <button onClick = {addNewProject} className="text-gray-400 hover:text-white mt-5 px-5 py-3 rounded-md bg-gray-800 hover:bg-black dark:hover:bg-gray-700">
          Create a new project
        </button>
        {/* </Link> */}

      </div>
    );
}