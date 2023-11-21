import { PayloadAction } from "@reduxjs/toolkit";

export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export interface ITask {
  id: number;
  description: string;
  date: Date;
  completed: boolean;
}

export interface IAddTaskAction {
  type: typeof ADD_TASK;
  payload: ITask;
}

export interface IDeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: number;
}

export interface IUpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: ITask;
}

export type TaskActionTypes =
  | IAddTaskAction
  | IDeleteTaskAction
  | IUpdateTaskAction;
