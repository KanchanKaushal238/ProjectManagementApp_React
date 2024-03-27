import { useDispatch, useSelector } from "react-redux";
import { projectCreationActions } from "../store";


export default function ProjectButton() {

  const projectList = useSelector(state => state.projectHandle.projectArrayItems);

  const dispatch = useDispatch();

  function openProjectDetails(projectListTile){
    const projectDetails = projectList.filter(x=>x.title === projectListTile);
    dispatch(projectCreationActions.openProjectDetails(projectDetails));
  }

  return (
    <>
      {projectList.map((project) => (
      <button key={project.title}
        className="flex text-gray-200 items-center m-2 p-2 rounded-lg "
        onClick = {() => openProjectDetails(project.title)}
      >{project.title}</button>
      ))
      }
    </>
  );
}
