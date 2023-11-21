import * as React from "react";
import "./Task.css";

interface ITaskProps {
  task: {
    id: number;
    description: string;
    date: Date;
    completed: boolean;
  };
}

const Task: React.FunctionComponent<ITaskProps> = ({ task }) => {
  return <div>Task Component - {task.description}</div>;
};

export default Task;
