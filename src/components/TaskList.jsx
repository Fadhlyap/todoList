import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({tasks, deleteTask, enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map((task) => (
        <TaskItem key={task.id} task={task} deleteTask = {deleteTask} enterEditMode={enterEditMode} />
      ))}
    </ul>
  );
};

export default TaskList;
