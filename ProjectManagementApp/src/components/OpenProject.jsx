import { useDispatch, useSelector } from "react-redux";
import AddTasks from "./AddTasks";
import { useState } from "react";
import { addTasksAPI, deleteProjectsAPI, projectCreationActions } from "../store";
import { useNavigate } from "react-router";


export default function OpenProject() {
  const [tasks, setTasks] = useState("");
  const projectDetails = useSelector(
    (state) => state.projectHandle.projectArrayItems
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleDeleteProject(event, id) {
    event.preventDefault();
    dispatch(deleteProjectsAPI({ id }));

    navigate('/ProjectList');
  }

  function handleTaskChange(event) {
    event.preventDefault();
    setTasks(event.target.value);
  }

  function handleAddTasks(event, id) {
    event.preventDefault();

    if(tasks.length !== 0)
    {
      dispatch(addTasksAPI({ projectDetails, id, tasks }));
    }

    setTasks("");
  }

  let id, title, description, dueDate;

  id = useSelector((state) => state.projectHandle.id);
  title = useSelector((state) => state.projectHandle.title);
  description = useSelector((state) => state.projectHandle.description);
  dueDate = useSelector((state) => state.projectHandle.dueDate);

  const inputTaskClass =
    "rounded-sm focus:outline-none border-gray-800 bg-gray-200 my-2 w-1/4 h-30 p-2";

  return (
    <>
      <div className="text-end mt-10 mr-20">
        <button
          type="button"
          className="text-gray-800 font-bold hover:text-white mt-5 px-5 py-3 rounded-md hover:bg-red-600"
          onClick={(event) => handleDeleteProject(event, id)}
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
          <input
            type="text"
            className={inputTaskClass}
            name="tasks"
            id="tasks"
            value={tasks}
            onChange={handleTaskChange}
          />
          <button
            type="button"
            className="text-gray-800 font-bold px-5 py-3 mr-0 rounded-md"
            onClick={(event) => handleAddTasks(event, id)}
          >
            Add Task
          </button>
        </form>
      </div>
      <AddTasks id={id} />
    </>
  );
}
