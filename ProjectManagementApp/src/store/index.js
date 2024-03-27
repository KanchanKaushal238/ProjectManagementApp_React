import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
// import { reducer as formReducer } from "redux-form";

const initialNewProjectState = {isNewProj: false, isOpenProj: false}
let projectArrayItems = [];
const projectDetail = {
    title: "",
    description: "",
    dueDate: "",
  };
const newProjectSlice = createSlice({
    name: 'NewProject',
    initialState: {initialNewProjectState, projectArrayItems, projectDetail},
    reducers : {
        addNewProject(state){
            state.isNewProj = true;
            state.isOpenProj = false;
        },
        projectCancel(state){
            state.isNewProj = false;
            state.isOpenProj = false;
        },

        saveProject(state, actions){
            const updatedForm = [...state.projectArrayItems];
            updatedForm.push({
                title: actions.payload.formData.title,
                description: actions.payload.formData.description,
                dueDate: actions.payload.formData.dueDate,
                projTasks: []
            });

            state.projectArrayItems = updatedForm;
            state.isNewProj = false;
            state.isOpenProj = false;
        },

        openProjectDetails(state, actions)
        {
            state.isOpenProj = true;
            state.isNewProj = true;
            state.title = actions.payload[0].title;
            state.description = actions.payload[0].description;
            state.dueDate = actions.payload[0].dueDate;
        },
        deleteProjectDetails(state, actions)
        {
            state.projectArrayItems = actions.payload.updatedArr;
            state.isOpenProj = false;
            state.isNewProj = false;
        },
        addTasksDetails(state, actions)
        {
            const updatedArr  = state.projectArrayItems.filter(x => x.title === actions.payload.title);
            updatedArr[0].projTasks.push(actions.payload.tasks);
            state.isNewProj = true;
            state.isOpenProj = true;
        },
        clearTasks(state, actions)
        {
            const updatedArr  = state.projectArrayItems.filter(x => x.title === actions.payload.title);
            const newProjArr = updatedArr[0].projTasks.filter(x => x !== actions.payload.task);
            updatedArr[0].projTasks = newProjArr;
            state.isNewProj = true;
            state.isOpenProj = true;
        }
    }
});

// 1. create store
const store = configureStore({
    reducer: {
        projectHandle : newProjectSlice.reducer,
        // formChangeHandler : saveFormDataSlice.reducer
    }
});

export const projectCreationActions = newProjectSlice.actions;
// export const formaDataActions = saveFormDataSlice.actions;

export default store;