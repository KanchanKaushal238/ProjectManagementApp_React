import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectCreationActions } from "../store";
import AddTasks from "./AddTasks";

let projectDetails = {
  title: "",
  description: "",
  dueDate: "",
};

export default function AddProject() {
  const isOpenProj = useSelector((state) => state.projectHandle.isOpenProj);

  const [formData, setformData] = useState(projectDetails);
  const [tasks, setTasks] = useState('');

  const inputClass =
    "rounded-sm focus:outline-none border-x-0 border-t-0 border-b-2 border-gray-800 bg-gray-200 mr-20 my-2 w-11/12 h-30 p-2";
  const inputTaskClass =
    "rounded-sm focus:outline-none border-gray-800 bg-gray-200 my-2 w-1/4 h-30 p-2";
  const labelClass = "font-bold text-gray-700 mt-10";

  const projectDetailsDel = useSelector(
    (state) => state.projectHandle.projectArrayItems
  );

  const dispatch = useDispatch();

  const projectCancel = () => {
    dispatch(projectCreationActions.projectCancel());
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(projectCreationActions.saveProject({ formData }));
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

  function handleDeleteProject(event, title) {
    event.preventDefault();
    const updatedArr = [...projectDetailsDel.filter((x) => x.title !== title)];
    dispatch(projectCreationActions.deleteProjectDetails({ updatedArr }));
  }

  function handleTaskChange(event)
  {
    event.preventDefault();
    setTasks(event.target.value);
  }

  function handleAddTasks(event,title)
  {
    event.preventDefault();
    dispatch(projectCreationActions.addTasksDetails({ title, tasks }));
    setTasks('');
  }

  
  let title, description, dueDate;

  title = useSelector((state) => state.projectHandle.title);
  description = useSelector((state) => state.projectHandle.description);
  dueDate = useSelector((state) => state.projectHandle.dueDate);


  return (
    <>
      {!isOpenProj && (
        <form onSubmit={handleFormSubmit}>
          <div className="text-end mt-10 mr-20">
            {/* if the project is in new state */}

            <>
              <button
                type="button"
                onClick={projectCancel}
                className="text-gray-800 font-bold hover:text-white mt-5 px-5 py-3 rounded-md hover:bg-black dark:hover:bg-gray-700"
              >
                Cancel
              </button>
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
      {isOpenProj && (
        <>
          <div className="text-end mt-10 mr-20">
            <button
              type="button"
              className="text-gray-800 font-bold hover:text-white mt-5 px-5 py-3 rounded-md hover:bg-red-600"
              onClick={(event) => handleDeleteProject(event, title)}
            >
              Delete
            </button>
          </div>
          <div className="ml-10">
            <h1 className="font-bold text-gray-700 mt-2 text-4xl">{title}</h1>
            <p className="text-stone-400 mt-2 text-sm">{dueDate}</p>
            <p className="text-gray-700 mt-2 text-lg">{description}</p>
            <hr className="w-4/5 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <form>
              <input type="text" className={inputTaskClass} name='tasks' id="tasks" value={tasks} onChange={handleTaskChange}/>
              <button type="button" className="text-gray-800 font-bold px-5 py-3 mr-0 rounded-md" onClick={(event) => handleAddTasks(event, title)}
                >
                Add Task
              </button>
            </form>
          </div>
          <AddTasks title = {title}/>
        </>
      )}
    </>
  );
}
