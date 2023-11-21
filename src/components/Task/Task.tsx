import * as React from "react";
import "./Task.css";
import { ITask } from "../../store/actions";

interface ITaskProps {
  task: ITask;
}

const Task: React.FunctionComponent<ITaskProps> = ({ task }) => {
  return <div>Task Component - {task.description}</div>;
};

export default Task;
