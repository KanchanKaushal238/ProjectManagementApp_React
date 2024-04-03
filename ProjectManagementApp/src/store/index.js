import {
  configureStore,
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
// import { routerMiddleware } from "react-router-redux";
import { toast } from "react-toastify";
import {thunk} from 'redux-thunk';
import { connectRoutes } from 'redux-first-router';
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

// import { reducer   as formReducer } from "redux-form";

// function for post request
export const addProjectsAPI = createAsyncThunk(
  "NewProject/addProjectsAPI",
  async ({ formData }) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://localhost:44386/api/home/SaveProject",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        console.log("project not added");
      }
      const res = await response.json();
      return res;
    };
    try {
      const resp = await sendRequest();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

// function for post request
export const addTasksAPI = createAsyncThunk(
  "NewProject/addTasksAPI",
  async ({ projectDetails, id, tasks }) => {
    const sendRequest = async () => {
      const projectDetailsForTask = JSON.parse(JSON.stringify(projectDetails.filter(x => x.id === id)));

      projectDetailsForTask[0].projTasks.push(tasks);

      const response = await fetch(
        `https://localhost:44386/api/Home/UpdateProject/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(projectDetailsForTask[0]),
        }
      );

      if (!response.ok) {
        console.log("task not added");
      }
      const res = await response.json();
      return res;
    };
    try {
      const resp = await sendRequest();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

export const clearTasksAPI = createAsyncThunk(
  "NewProject/clearTasksAPI",
  async ({ projectDetailsForTask, id, task }) => {
    const sendRequest = async () => {

      const updatedArr = JSON.parse(JSON.stringify(projectDetailsForTask));
      const newProjArr = updatedArr[0].projTasks.filter(
        (x) => x !== task
      );

      updatedArr[0].projTasks = newProjArr;
      
      const response = await fetch(
        `https://localhost:44386/api/Home/UpdateProject/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedArr[0]),
        }
      );

      if (!response.ok) {
        console.log("task not added");
      }
      const res = await response.json();
      return res;
    };
    try {
      const resp = await sendRequest();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

// function for post request
export const getProjectsAPI = createAsyncThunk(
  "NewProject/getProjectsAPI",
  async () => {
    const sendRequest = async () => {

      const response = await fetch(
        "https://localhost:44386/api/Home/GetAllProjects",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        
      }
      const res = await response.json();
      return res;
    };
    try {
      const resp = await sendRequest();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProjectsAPI = createAsyncThunk(
  "NewProject/deleteProjectsAPI",
  async ({id}) => {
    const sendRequest = async () => {

      const response = await fetch(
        `https://localhost:44386/api/Home/DeleteProject/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        
      }
      const res = await response.json();
      return res;
    };
    try {
      const resp = await sendRequest();
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
);

// const apiResponse = {
//   isSuccess : false,
//   pending : false,
//   error : false
// }

const initialNewProjectState = {
  isNewProj: false,
  isOpenProj: false,
  openProjectList: false,
  spinner: false,
  isSuccess: false,
  pending: false,
  error: false,
};
let projectArrayItems = [];
const projectDetail = {
  id: "",
  title: "",
  description: "",
  dueDate: "",
};
const newProjectSlice = createSlice({
  name: "NewProject",
  initialState: { initialNewProjectState, projectArrayItems, projectDetail },
  reducers: {
    addNewProject(state) {
      state.isNewProj = true;
      state.isOpenProj = false;
      state.isSuccess = false;
      state.openProjectList = false;
    },
    projectCancel(state) {
      state.isNewProj = false;
      state.isOpenProj = false;
      state.isSuccess = false;
      state.openProjectList = false;
    },
    notify(state) {
      toast("Project Added Successfully!");
    },

    // saveProject(state, actions) {
    //   const updatedForm = [...state.projectArrayItems];
    //   updatedForm.push({
    //     title: actions.payload.formData.title,
    //     description: actions.payload.formData.description,
    //     dueDate: actions.payload.formData.dueDate,
    //     projTasks: [],
    //   });

    //   state.projectArrayItems = updatedForm;
    //   state.isNewProj = false;
    //   state.isOpenProj = false;
    // },

    openProjectDetails(state, actions) {
      state.isOpenProj = true;
      state.isNewProj = true;
      state.id = actions.payload[0].id;
      state.title = actions.payload[0].title;
      state.description = actions.payload[0].description;
      state.dueDate = actions.payload[0].dueDate;
      state.isSuccess = false;
      state.openProjectList = false;
    },
    deleteProjectDetails(state, actions) {
      state.projectArrayItems = actions.payload.updatedArr;
      state.isOpenProj = false;
      state.isNewProj = false;
      state.isSuccess = false;
      state.openProjectList = false;
    },
    getProjectList(state, actions)
    {
      if(state.projectArrayItems.length === 0)
      {
        state.isNewProj = false,
        state.isOpenProj= false;
        state.isSuccess= false;
        state.openProjectList = false;
      }
      else {
        state.openProjectList = true;
      }

    },
    // addTasksDetails(state, actions) {
    //   state.isSuccess = false;
    //   state.isNewProj = true;
    //   state.isOpenProj = true;
    // },
    // clearTasks(state, actions) {
    //   const updatedArr = state.projectArrayItems.filter(
    //     (x) => x.id === actions.payload.id
    //   );
    //   const newProjArr = updatedArr[0].projTasks.filter(
    //     (x) => x !== actions.payload.task
    //   );
    //   updatedArr[0].projTasks = newProjArr;
    //   state.isNewProj = true;
    //   state.isOpenProj = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProjectsAPI.pending, (state) => {
        state.pending = true;
        state.isSuccess = false;
      })
      .addCase(addProjectsAPI.fulfilled, (state, action) => {
        if (action.payload !== undefined && action.payload === true) {

        const updatedForm = [...state.projectArrayItems];
        updatedForm.push({
          title: action.meta.arg.formData.title,
          description: action.meta.arg.formData.description,
          dueDate: action.meta.arg.formData.dueDate,
          projTasks: [],
        });

        state.projectArrayItems = updatedForm;

        
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
        }
        state.isNewProj = false;
        state.isOpenProj = false;
      })
      .addCase(addProjectsAPI.rejected, (state) => {
        state.error = true;
        state.isSuccess = false;
      })

      .addCase(addTasksAPI.pending, (state) => {
        state.pending = true;
        state.isSuccess = false;
      })
      .addCase(addTasksAPI.fulfilled, (state, actions) => {
        state.isSuccess = false;
        const updatedArr = state.projectArrayItems.filter(
          (x) => x.id === actions.meta.arg.id
        );
        updatedArr[0].projTasks.push(actions.meta.arg.tasks);
        state.isNewProj = true;
        state.isOpenProj = true;
      })
      .addCase(addTasksAPI.rejected, (state) => {
        state.error = true;
        state.isSuccess = false;
      })

      .addCase(getProjectsAPI.pending, (state) => {
        
      })
      .addCase(getProjectsAPI.fulfilled, (state, actions) => {
        if (actions.payload !== undefined) 
        {
          actions.payload.map((project) => {
            state.projectArrayItems.push(project);
          })
        }
      })
      .addCase(getProjectsAPI.rejected, (state) => {
        state.error = true;
        state.isSuccess = false;
      })

      .addCase(clearTasksAPI.pending, (state) => {
        
      })
      .addCase(clearTasksAPI.fulfilled, (state, actions) => {
          
          const updatedArr = state.projectArrayItems.filter(
            (x) => x.id === actions.meta.arg.id
          );
          const newProjArr = updatedArr[0].projTasks.filter(
            (x) => x !== actions.meta.arg.task
          );
          updatedArr[0].projTasks = newProjArr;
          state.isNewProj = true;
          state.isOpenProj = true;
        //}
      })
      .addCase(clearTasksAPI.rejected, (state) => {
        state.error = true;
        state.isSuccess = false;
      })

      .addCase(deleteProjectsAPI.pending, (state) => {
        
      })
      .addCase(deleteProjectsAPI.fulfilled, (state, actions) => {
          
        state.projectArrayItems = state.projectArrayItems.filter((x) => x.id !== actions.meta.arg.id);
        state.isOpenProj = false;
        state.isNewProj = false;
        state.isSuccess = false;
        state.openProjectList = false;
        //}
      })
      .addCase(deleteProjectsAPI.rejected, (state) => {
        state.error = true;
        state.isSuccess = false;
      })
    
  },
});




export const history = createBrowserHistory();

const createRootReducer = () => ({
  projectHandle: newProjectSlice.reducer,
  router: connectRouter(history)
})
const preloadedState = {};
export const store = configureStore({
  middleware : (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(routerMiddleware(history)),
  reducer: createRootReducer(history),
  preloadedState
})

// 1. create store
// const store =  configureStore({
//   reducer : {
//     projectHandle: newProjectSlice.reducer,
//   }
// });

export const projectCreationActions = newProjectSlice.actions;

// export default store;
