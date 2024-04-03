import { useDispatch, useSelector } from "react-redux";
import { addTasksAPI, clearTasksAPI, projectCreationActions } from "../store";
import { Fragment } from "react";

export default function AddTasks({id}){
    
    const projectDetails = useSelector((state) => state.projectHandle.projectArrayItems);

    const projectDetailsForTask = [...projectDetails.filter(x=> x.id === id)];
    
    const dispatch = useDispatch();

    function handleClear(task){
        dispatch(clearTasksAPI({projectDetailsForTask, id, task}));
    }

    return (
        <>
        <div className="ml-10 mt-5">
            <ul>
                {
                    projectDetailsForTask[0].projTasks.map((task, i) => (
                        <Fragment key = {`unq-${task} ${i}`}>
                        <li key = {task} className="rounded-sm font-semibold flex focus:outline-none border-gray-800 bg-gray-200 mb-0 w-4/5 h-30 p-3">
                            <span key = {`${task} ${i}`}>{task}</span>
                            <button key = {`${i} ${task}`} className="ml-auto font-semibold mr-2" onClick={() => handleClear(task)}>Clear</button>
                        </li>
                        </Fragment>
                    ))
                }
            </ul>
            </div>
        </>
    )

}