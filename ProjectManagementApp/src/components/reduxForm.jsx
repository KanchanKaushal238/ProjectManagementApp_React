import { Field, reduxForm } from "redux-form";

const addProjectForm = (handleSubmit) => {
    const inputClass = "rounded-sm focus:outline-none border-x-0 border-t-0 border-b-2 border-gray-800 bg-gray-200 mr-20 my-2 w-11/12 h-30 p-2";
    const labelClass = "font-bold text-gray-700 mt-10";
    const isDisabled = "readonly"; 
    <form onSubmit={handleSubmit}>
    <div className="text-end mt-10 mr-20">
      {/* if the project is in new state */}
      {!projState.isOpenProj && (
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
      )}
      {/* if the project is in open state */}
      {projState.isOpenProj && (
        <button
          type="submit"
          className="text-white mt-5 px-5 py-3 rounded-md bg-red"
        >
          Delete
        </button>
      )}
    </div>
    <div className="ml-10">
      <ul>
        <li>
          <label className={labelClass}>Title</label>
        </li>
        <li>
          <Field
            component="input"
            className={inputClass}
            name="title"
            type = "text"
          />
        </li>
        <li>
          <label className={labelClass}>Description</label>
        </li>
        <li>
          <Field
            component = "textarea"
            type="text"
            className={inputClass}
            name="description"
            />
        </li>
        <li>
          <label className={labelClass}>Due Date</label>
        </li>
        <li>
          <Field
          component="input"
            type="date"
            className={inputClass}
            name="dueDate"
          />
        </li>
      </ul>
    </div>
  </form>
  }
  
  export default addProject = ({
    form: 'addsProject',
  })(addProjectForm);