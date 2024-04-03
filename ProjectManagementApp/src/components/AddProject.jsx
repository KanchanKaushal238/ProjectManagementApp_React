import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasksAPI, addProjectsAPI, projectCreationActions } from "../store";
import OpenProject from "./OpenProject";
import { Link, useNavigate } from "react-router-dom";

let projectDetails = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
};

export default function AddProject() {
  const isOpenProj = useSelector((state) => state.projectHandle.isOpenProj);

  const [formData, setformData] = useState(projectDetails);

  const navigate =useNavigate();

  const inputClass =
    "rounded-sm focus:outline-none border-x-0 border-t-0 border-b-2 border-gray-800 bg-gray-200 mr-20 my-2 w-11/12 h-30 p-2";

  const labelClass = "font-bold text-gray-700 mt-10";

  const dispatch = useDispatch();

  const projectCancel = () => {
    dispatch(projectCreationActions.projectCancel());
  };

  function handleFormSubmit(event) {
    debugger;
    event.preventDefault();
    dispatch(addProjectsAPI({ formData }));

    navigate('..');
  }

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <>
      {!isOpenProj && (
        <form onSubmit={handleFormSubmit}>
          <div className="text-end mt-10 mr-20">
            {/* if the project is in new state */}

            <>
              <Link to="..">
                <button
                  type="button"
                  onClick={projectCancel}
                  className="text-gray-800 font-bold hover:text-white mt-5 px-5 py-3 rounded-md hover:bg-black dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </Link>
              {/* <button
                type="button"
                onClick={projectCancel}
                className="text-gray-800 font-bold hover:text-white mt-5 px-5 py-3 rounded-md hover:bg-black dark:hover:bg-gray-700"
              >
                Cancel
              </button> */}
              &nbsp;
              <button
                type="submit"
                className="text-white mt-5 px-5 py-3 rounded-md bg-black"
              >
                Save
              </button>
            </>
          </div>
          <div className="ml-10">
            <ul>
              <li>
                <label className={labelClass}>Title</label>
              </li>
              <li>
                <input
                  type="text"
                  className={inputClass}
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  disabled={isOpenProj}
                />
              </li>
              <li>
                <label className={labelClass}>Description</label>
              </li>
              <li>
                <textarea
                  type="text"
                  className={inputClass}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  disabled={isOpenProj}
                ></textarea>
              </li>
              <li>
                <label className={labelClass}>Due Date</label>
              </li>
              <li>
                <input
                  type="date"
                  className={inputClass}
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  disabled={isOpenProj}
                />
              </li>
            </ul>
          </div>
        </form>
      )}
      {/* if the project is in open state */}
      {isOpenProj && <OpenProject />}
    </>
  );
}
