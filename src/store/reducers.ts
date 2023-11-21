import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_TASK,
  DELETE_TASK,
  IAddTaskAction,
  IDeleteTaskAction,
  ITask,
  IUpdateTaskAction,
  UPDATE_TASK,
} from "./actions";

type IState = ITask[];
const initialState: IState = [];

const taskReducer = createReducer<IState, {}>(initialState, {
  [ADD_TASK]: (state: IState, action: IAddTaskAction) => {
    return [...state, action.payload];
  },
  [DELETE_TASK]: (state: IState, action: IDeleteTaskAction) => {
    return state.filter((task) => task.id !== action.payload);
  },
  [UPDATE_TASK]: (state: IState, action: IUpdateTaskAction) => {
    return state.map((task) =>
      task.id === action.payload.id ? { ...task, ...action.payload } : task
    );
  },
});
export default taskReducer;
